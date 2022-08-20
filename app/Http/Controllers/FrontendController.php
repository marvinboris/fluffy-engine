<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use App\Models\Project;
use App\Models\Publication;
use App\Models\PublicationCategory;
use App\Models\Service;
use App\Models\Skill;
use App\Models\Technology;
use App\Models\User;
use App\Notifications\ContactNotification;
use App\Notifications\QuoteNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class FrontendController extends Controller
{
    public function home()
    {
        $technologies = Technology::orderBy('id', 'DESC')->whereIn('name', ['React', 'Laravel', 'SASS', 'Node.js', 'JavaScript', 'Bootstrap'])->get();

        $projects = [];
        foreach (Project::orderBy('date', 'DESC')->take(6)->get() as $project) {
            $projects[] = array_merge($project->toArray(), [
                'technologies' => $project->technologies,
            ]);
        }

        return response()->json([
            'projects' => $projects,
            'technologies' => $technologies,
        ]);
    }

    public function about()
    {
        return response()->json([]);
    }

    public function skills()
    {
        $skills = Skill::orderBy('percentage', 'DESC')->get();
        $experiences = Experience::get();

        return response()->json([
            'skills' => $skills,
            'experiences' => $experiences,
        ]);
    }

    public function portfolio()
    {
        $projects = [];
        foreach (Project::orderBy('date', 'DESC')->get() as $project) {
            $projects[] = array_merge($project->toArray(), [
                'technologies' => $project->technologies,
            ]);
        }

        return response()->json([
            'projects' => $projects,
        ]);
    }

    public function contact(Request $request)
    {
        $request->validate([
            'name' => 'nullable|string',
            'email' => 'nullable|email',
            'subject' => 'nullable|string',
            'message' => 'required|string',
        ]);

        Notification::send(User::whereEmail('jaris.ultio.21@gmail.com')->first(), new ContactNotification($request->all()));

        $cms = UtilController::cms();

        return response()->json([
            'message' => UtilController::message($cms['pages'][$request->frontend_lang]['frontend']['messages']['contact']['success'], 'success'),
        ]);
    }
}
