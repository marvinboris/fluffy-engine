<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $account = User::whereEmail($request->email)->first();

        $credentials = ['email' => $account->email, 'password' => $request->password];
        // if (!$account->email_verified_at) return response()->json([
        //     'message' => [
        //         'type' => 'danger',
        //         'content' => 'Please, check your mailbox and click on the activation link.'
        //     ]
        // ], 403);
        if ($account->is_active === 0) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Your account is not active. Please, contact the administrator.'
            ]
        ], 403);

        if (!Auth::attempt($credentials))
            return response()->json([
                'message' => [
                    'type' => 'danger',
                    'content' => 'Unauthorized'
                ]
            ], 401);

        $account->update([
            'ip' => $request->ip(),
            'last_login' => now()
        ]);
        $tokenResult = $account->createToken(User::personalAccessToken());
        $token = $tokenResult->token;
        // if ($request->remember_me)
        $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();

        $data = array_merge($account->toArray(), [
            'notifications' => $account->notifications()->latest()->limit(5)->get(),
            'language' => $account->language->abbr
        ]);

        $role = $account->role;

        $role_features = [];
        foreach ($role->features as $feature) {
            $role_features[] = [
                'id' => $feature->id,
                'prefix' => $feature->prefix,
                'permissions' => $feature->pivot->access,
            ];
        }

        $role = $role->toArray();
        $role['features'] = $role_features;

        $data = $data + [
            'role' => $role
        ];

        $cmsFile = UtilController::cms();
        $cms = [
            'global' => $cmsFile['global'],
            'pages' => $cmsFile['pages'][$account->language->abbr],
        ];
        if (request()->has('frontend_lang')) $cms['pages']['frontend'] = $cmsFile['pages'][request()->frontend_lang]['frontend'];

        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
            'accountData' => $data,
            'content' => [
                'language' => $account->language->toArray(),
                'cms' => $cms,
            ],
        ]);
    }

    public function forgot(Request $request)
    {
        $request->validate([
            'email' => 'exists:users'
        ]);

        $account = User::whereEmail($request->email)->first();
        $link = url('/auth/reset/' . $account->id) . '/' . Crypt::encryptString($account->toJson());
        // Mail::to($request->email)->send(new ResetLink($link));

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Reset password link successfully sent.'
            ]
        ]);
    }

    public function reset(Request $request, $id, $code)
    {
        $request->validate([
            'password' => 'required|confirmed'
        ]);

        $account = User::find($id);
        if (Crypt::decryptString($code) === $account->toJson()) {
            $account->password = Hash::make($request->password);
            $account->save();

            return response()->json([
                'message' => [
                    'type' => 'success',
                    'content' => 'Your password has been successfully reset.'
                ]
            ]);
        }

        return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Failure.'
            ]
        ]);
    }
}
