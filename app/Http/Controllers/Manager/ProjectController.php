<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Project;
use App\Models\Experience;
use App\Models\Technology;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    private $rules = [
        'title' => 'array|required',
        'description' => 'array|required',
        'date' => 'date|required',
        'github' => 'nullable|string',
        'link' => 'nullable|string',
        'experience_id' => 'nullable|exists:experiences,id',
        'technologies' => 'array|required|exists:technologies,id',
    ];



    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $projects = [];
        $filteredData = Project::orderBy('id');

        $filteredData = $filteredData
            // ->join('experiences', 'experiences.id', '=', 'projects.experience_id')
            ->select('projects.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('projects.title', 'LIKE', "%$search%")
                        ->orWhere('projects.description', 'LIKE', "%$search%")
                        ->orWhere('projects.github', 'LIKE', "%$search%")
                        ->orWhere('projects.link', 'LIKE', "%$search%")
                        // ->orWhere('experiences.company', 'LIKE', "%$search%")
                        ->orWhere('projects.date', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $project) {
            $projects[] = array_merge($project->toArray(), [
                'experience' => $project->experience ? $project->experience->company : null,
                'technologies' => $project->technologies,
            ]);
        }

        return [
            'projects' => $projects,
            'total' => $total,
        ];
    }

    private function information()
    {
        $experiences = Experience::all();
        $technologies = Technology::all();

        return [
            'experiences' => $experiences,
            'technologies' => $technologies,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $projects = $data['projects'];
        $total = $data['total'];

        return response()->json([
            'projects' => $projects,
            'total' => $total,
        ]);
    }

    public function info()
    {
        $information = $this->information();

        return response()->json($information);
    }

    public function show($type, $id)
    {
        $cms = UtilController::cms();
        $manager = UtilController::get(request());

        $project = Project::find($id);
        if (!$project) return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['projects']['not_found'], 'danger'),
        ]);

        $information = $this->information();

        return response()->json([
            'project' => $project,
        ] + $information);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $manager = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except(['title', 'description']);

        $project = Project::create($input + [
            'title' => json_encode($request->title),
            'description' => json_encode($request->description),
        ]);

        $project->technologies()->sync($request->technologies);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['projects']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $type, $id)
    {
        $cms = UtilController::cms();
        $manager = UtilController::get(request());

        $project = Project::find($id);
        if (!$project) return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['projects']['not_found'], 'danger'),
        ]);

        $rules = $this->rules;
        $request->validate($rules);

        $input = $request->except(['title', 'description']);

        $project->update($input + [
            'title' => json_encode($request->title),
            'description' => json_encode($request->description),
        ]);

        $project->technologies()->sync($request->technologies);


        return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['projects']['updated'], 'success'),
            'project' => $project,
        ]);
    }

    public function destroy($type, $id)
    {
        $cms = UtilController::cms();
        $manager = UtilController::get(request());

        $project = Project::find($id);
        if (!$project) return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['projects']['not_found'], 'danger'),
        ]);

        if ($project->photo && is_file(public_path($project->photo))) unlink(public_path($project->photo));
        $project->delete();

        $data = $this->data();

        $projects = $data['projects'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['projects']['deleted'], 'success'),
            'projects' => $projects,
            'total' => $total,
        ]);
    }
}
