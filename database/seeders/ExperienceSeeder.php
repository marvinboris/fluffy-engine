<?php

namespace Database\Seeders;

use App\Models\Experience;
use Illuminate\Database\Seeder;

class ExperienceSeeder extends Seeder
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
                'title' => json_encode([
                    'fr' => 'Support technique et développeur',
                    'en' => 'IT support & developer',
                ]),
                'company' => json_encode([
                    'fr' => 'Global Investment Trading',
                    'en' => 'Global Investment Trading',
                ]),
                'start_year' => 2019,
                'end_year' => 2020,
                'description' => json_encode([
                    'fr' => "J'étais second du département informatique et ai développé plusieurs projets.",
                    'en' => "I was second in the IT department and developed several projects.",
                ]),
            ],
            [
                'title' => json_encode([
                    'fr' => 'Développeur web consultant',
                    'en' => 'Consulting web developer',
                ]),
                'company' => json_encode([
                    'fr' => 'Briluce Services',
                    'en' => 'Briluce Services',
                ]),
                'start_year' => 2020,
                'end_year' => 2021,
                'description' => json_encode([
                    'fr' => "C'est une start-up avec laquelle j'ai développé plusieurs plateformes maquettées par eux.",
                    'en' => "It's a start-up with which I developed several platforms modeled by them.",
                ]),
            ],
        ];

        foreach ($items as $item) {
            Experience::create($item);
        }
    }
}
