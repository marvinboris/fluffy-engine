<?php

namespace Database\Seeders;

use App\Models\Feature;
use App\Models\Role;
use Illuminate\Database\Seeder;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            [
                'name' => "CMS",
                'prefix' => 'cms',
            ],
            [
                'name' => "Users",
                'prefix' => 'users',
            ],
            [
                'name' => "Roles",
                'prefix' => 'roles',
            ],
            [
                'name' => "Features",
                'prefix' => 'features',
            ],
            [
                'name' => "Languages",
                'prefix' => 'languages',
            ],
            [
                'name' => "Experiences",
                'prefix' => 'experiences',
            ],
            [
                'name' => "Skills",
                'prefix' => 'skills',
            ],
            [
                'name' => "Projects",
                'prefix' => 'projects',
            ],
            [
                'name' => "Technologies",
                'prefix' => 'technologies',
            ],
        ];

        foreach ($items as $item) {
            Feature::create($item);
        }

        foreach (Role::all() as $role) {
            foreach (Feature::all() as $item) {
                $role->features()->attach($item->id, [
                    'access' => json_encode(['c', 'u', 'd'])
                ]);
            }
        }
    }
}
