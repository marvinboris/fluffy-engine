<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    private $rules = [
        'name' => 'required|string',
        'percentage' => 'required|integer',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $skills = [];
        $filteredData = Skill::orderBy('id');

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('skills.name', 'LIKE', "%$search%")
                        ->orWhere('skills.percentage', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $skill) {
            $skills[] = $skill->toArray();
        }

        return [
            'skills' => $skills,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $skills = $data['skills'];
        $total = $data['total'];

        return response()->json([
            'skills' => $skills,
            'total' => $total,
        ]);
    }

    public function show($type, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $skill = Skill::find($id);
        if (!$skill) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['skills']['not_found'], 'danger'),
        ]);

        return response()->json([
            'skill' => $skill,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate(array_merge($this->rules, [
            'name' => 'required|string|unique:skills',
        ]));

        $input = $request->all();

        Skill::create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['skills']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $type, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $skill = Skill::find($id);
        if (!$skill) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['skills']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $skill);
        $request->validate($rules);

        $input = $request->all();

        $skill->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['skills']['updated'], 'success'),
            'skill' => $skill,
        ]);
    }

    public function destroy($type, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $skill = Skill::find($id);
        if (!$skill) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['skills']['not_found'], 'danger'),
        ]);

        $skill->delete();

        $data = $this->data();

        $skills = $data['skills'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['skills']['deleted'], 'success'),
            'skills' => $skills,
            'total' => $total,
        ]);
    }
}
