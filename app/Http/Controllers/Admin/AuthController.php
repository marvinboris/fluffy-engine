<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Mail\VerificationCode;
use App\Models\Admin;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function username()
    {
        return 'email';
    }

    protected function guard()
    {
        return Auth::guard('admin');
    }

    public function login(Request $request)
    {
        $input = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        $account = Admin::where('email', $input['email'])->first();

        if ($account) {
            if (Hash::check($input['password'], $account->password)) {
                $code = User::generateNewRef();
                // if ($request->otp === 'sms') {
                //     $budget = new BudgetSMS([
                //         'username' => env('BUDGET_USERNAME'),
                //         'userid' => env('BUDGET_USER_ID'),
                //         'handle' => env('BUDGET_HANDLE'),
                //         'from' => env('APP_NAME'),
                //     ]);

                //     $budget->send('+' . $account->phone, 'Your Admin Login Code is ' . $code);
                // } else 
                if ($request->otp === 'email') Mail::to($account->email)->send(new VerificationCode($code));
                $hash = Crypt::encryptString(json_encode([
                    'id' => $account->id,
                    'code' => $code,
                ]));
                return response()->json([
                    'hash' => $hash
                ]);
            }
        }
        return response()->json([
            'message' => UtilController::message('These credentials do not match our records.', 'danger')
        ], 403);
    }

    public function resend(Request $request)
    {
        $data = json_decode(Crypt::decryptString($request->hash));
        $account = Admin::findOrFail($data->id);

        $code = User::generateNewRef();
        Mail::to($account->email)->send(new VerificationCode($code));
        // $budget = new BudgetSMS([
        //     'username' => env('BUDGET_USERNAME'),
        //     'userid' => env('BUDGET_USER_ID'),
        //     'handle' => env('BUDGET_HANDLE'),
        //     'from' => env('APP_NAME'),
        // ]);

        // $budget->send('+' . $account->phone, 'Your Verification Code is ' . $code);
        $hash = Crypt::encryptString(json_encode([
            'id' => $account->id,
            'code' => $code,
        ]));

        return response()->json([
            'message' => UtilController::message('Verification code successfully sent.', 'success'),
            'hash' => $hash
        ]);
    }

    public function verify(Request $request)
    {
        $input = $request->validate([
            'code' => 'required|string'
        ]);

        $data = json_decode(Crypt::decryptString($request->hash));
        if ($input['code'] === $data->code) {
            $account = Admin::findOrFail($data->id);
            $tokenResult = $account->createToken(Admin::personalAccessToken());
            $token = $tokenResult->token;
            $token->save();

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
                'accountData' => array_merge($account->toArray(), [
                    'notifications' => $account->unreadNotifications()->latest()->limit(5)->get(),
                    'language' => $account->language->abbr
                ]),
                'content' => [
                    'language' => $account->language->toArray(),
                    'cms' => $cms,
                ],
            ]);
        }
        return response()->json([
            'message' => 'Verification code is invalid.'
        ], 403);
    }
}
