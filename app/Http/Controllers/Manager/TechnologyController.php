<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Technology;
use Illuminate\Http\Request;

class TechnologyController extends Controller
{
    private $rules = [
        'name' => 'required|string',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $technologies = [];
        $filteredData = Technology::orderBy('id');

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('technologies.name', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $technology) {
            $technologies[] = $technology->toArray();
        }

        return [
            'technologies' => $technologies,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $technologies = $data['technologies'];
        $total = $data['total'];

        return response()->json([
            'technologies' => $technologies,
            'total' => $total,
        ]);
    }

    public function show($type, $id)
    {
        $cms = UtilController::cms();
        $manager = UtilController::get(request());

        $technology = Technology::find($id);
        if (!$technology) return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['technologies']['not_found'], 'danger'),
        ]);

        return response()->json([
            'technology' => $technology,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $manager = UtilController::get(request());

        $request->validate(array_merge($this->rules, [
            'name' => 'required|string|unique:technologies',
        ]));

        $input = $request->all();

        Technology::create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['technologies']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $type, $id)
    {
        $cms = UtilController::cms();
        $manager = UtilController::get(request());

        $technology = Technology::find($id);
        if (!$technology) return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['technologies']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $technology);
        $request->validate($rules);

        $input = $request->all();

        $technology->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['technologies']['updated'], 'success'),
            'technology' => $technology,
        ]);
    }

    public function destroy($type, $id)
    {
        $cms = UtilController::cms();
        $manager = UtilController::get(request());

        $technology = Technology::find($id);
        if (!$technology) return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['technologies']['not_found'], 'danger'),
        ]);

        $technology->delete();

        $data = $this->data();

        $technologies = $data['technologies'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$manager->language->abbr]['backend']['messages']['technologies']['deleted'], 'success'),
            'technologies' => $technologies,
            'total' => $total,
        ]);
    }
}
