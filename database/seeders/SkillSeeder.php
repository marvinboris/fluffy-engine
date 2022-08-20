<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'React', 'percentage' => 92],
            ['name' => 'Laravel', 'percentage' => 90],
            ['name' => 'SASS', 'percentage' => 80],
            ['name' => 'Node.js', 'percentage' => 70],
            ['name' => 'Bootstrap', 'percentage' => 88],
        ];

        foreach ($items as $item) {
            Skill::create($item);
        }
    }
}
