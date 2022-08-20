<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Experience;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Technology;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $cms = UtilController::cms();
        $manager = UtilController::get(request());

        $experiences = Experience::count();
        $skills = Skill::count();
        $projects = Project::count();
        $technologies = Technology::count();
        
        $generalReport = [
            'projects' => $projects,
        ];

        $names = $cms['pages'][$manager->language->abbr]['general']['months'];
        $totalProjects = [];
        for ($i = 0; $i < 12; $i++) {
            $totalProjects[] = Project::whereYear('date', now()->year)->whereMonth('date', $i + 1)->count();
        }
        for ($i = 0; $i < count($names); $i++) {
            $generalReportTrackerData[] = [
                'name' => strtoupper($names[$i]),
                'Projects' => $totalProjects[$i],
            ];
        }

        return response()->json([
            'blocksData' => [
                'experiences' => $experiences,
                'skills' => $skills,
                'projects' => $projects,
                'technologies' => $technologies,
            ],
            'generalReport' => $generalReport,
            'generalReportTrackerData' => $generalReportTrackerData,
        ]);
    }
}
