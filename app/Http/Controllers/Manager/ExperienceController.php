<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Experience;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    private $rules = [
        'title' => 'array|required',
        'company' => 'array|required',
        'description' => 'array|required',
        'start_year' => 'required|integer',
        'end_year' => 'required|integer',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $experiences = [];
        $filteredData = Experience::orderBy('id');

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('title', 'LIKE', "%$search%")
                        ->orWhere('company', 'LIKE', "%$search%")
                        ->orWhere('description', 'LIKE', "%$search%")
                        ->orWhere('start_year', 'LIKE', "%$search%")
                        ->orWhere('end_year', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $experience) {
            $experiences[] = $experience->toArray();
        }

        return [
            'experiences' => $experiences,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $experiences = $data['experiences'];
        $total = $data['total'];

        return response()->json([
            'experiences' => $experiences,
            'total' => $total,
        ]);
    }

    public function show($type, $id)
    {
        $cms = UtilController::cms();
        $manager = UtilController::get(request());

        $experience = Experience::find($id);
        if (!$experience) return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['experiences']['not_found'], 'danger'),
        ]);

        return response()->json([
            'experience' => $experience,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $manager = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except(['title', 'company', 'description']);

        Experience::create($input + [
            'title' => json_encode($request->title),
            'company' => json_encode($request->company),
            'description' => json_encode($request->description),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['experiences']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $type, $id)
    {
        $cms = UtilController::cms();
        $manager = UtilController::get(request());

        $experience = Experience::find($id);
        if (!$experience) return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['experiences']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $experience);
        $request->validate($rules);

        $input = $request->except(['title', 'company', 'description']);

        $experience->update($input + [
            'title' => json_encode($request->title),
            'company' => json_encode($request->company),
            'description' => json_encode($request->description),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['experiences']['updated'], 'success'),
            'experience' => $experience,
        ]);
    }

    public function destroy($type, $id)
    {
        $cms = UtilController::cms();
        $manager = UtilController::get(request());

        $experience = Experience::find($id);
        if (!$experience) return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['experiences']['not_found'], 'danger'),
        ]);

        $experience->delete();

        $data = $this->data();

        $experiences = $data['experiences'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['experiences']['deleted'], 'success'),
            'experiences' => $experiences,
            'total' => $total,
        ]);
    }
}
