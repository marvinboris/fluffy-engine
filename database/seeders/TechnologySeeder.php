<?php

namespace Database\Seeders;

use App\Models\Technology;
use Illuminate\Database\Seeder;

class TechnologySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => "HTML"],
            ['name' => "CSS"],
            ['name' => "SASS"],
            ['name' => "JavaScript"],
            ['name' => "React"],
            ['name' => "Node.js"],
            ['name' => "Laravel"],
            ['name' => "PHP"],
            ['name' => "jQuery"],
            ['name' => "REST"],
            ['name' => "MySQL"],
            ['name' => "MongoDB"],
            ['name' => "TypeScript"],
            ['name' => "GraphQL"],
            ['name' => "npm"],
            ['name' => "git"],
            ['name' => "Bootstrap"],
        ];

        foreach ($items as $item) {
            Technology::create($item);
        }
    }
}
