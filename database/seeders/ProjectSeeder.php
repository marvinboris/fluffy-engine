<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Experience;
use App\Models\Project;
use App\Models\Technology;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
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
                'data' => [
                    'title' => json_encode([
                        'fr' => "Système de gestion de l'assistance client",
                        'en' => 'Customer Support Management System',
                    ]),
                    'description' => json_encode([
                        'fr' => "Une petite plateforme sur laquelle les clients d'une entreprise peuvent soumettre leurs problèmes et l'équipe du support peut leur répondre aisément.",
                        'en' => "A small platform where a company's customers can submit their issues and the support team can easily respond to them.",
                    ]),
                    'github' => 'https://github.com/marvinboris/scaling-enigma.git',
                    'link' => '//',
                    'experience_id' => Experience::where('company', 'LIKE', "%global%")->first()->id,
                    'date' => date('2021-02-11'),
                ],
                'technologies' => ['React', 'Laravel', 'MySQL', 'SASS', 'Bootstrap'],
            ],
            [
                'data' => [
                    'title' => json_encode([
                        'fr' => "Système de gestion des problèmes de plateformes",
                        'en' => 'Platform Issues Management System',
                    ]),
                    'description' => json_encode([
                        'fr' => "Une plateforme pour faciliter la gestion des problèmes des différentes plateformes développées par un prestataire et le support technique.",
                        'en' => "A platform to facilitate the management of the problems of the different platforms developed by a service provider and the technical support.",
                    ]),
                    'github' => 'https://github.com/marvinboris/didactic-waddle.git',
                    'link' => '//',
                    'experience_id' => Experience::where('company', 'LIKE', "%global%")->first()->id,
                    'date' => date('2020-12-06'),
                ],
                'technologies' => ['React', 'Laravel', 'MySQL', 'SASS', 'Bootstrap'],
            ],
            [
                'data' => [
                    'title' => json_encode([
                        'fr' => "Outil de planification et d'ingénierie des réseaux à fibre optique",
                        'en' => 'Fiber Optic Network Planning and Engineering Tool',
                    ]),
                    'description' => json_encode([
                        'fr' => "Un outil basé sur la théorie des graphes pour la détermination des chemins les plus courts pour la mise en place de nouveaux réseaux à fibre optique.",
                        'en' => "A tool based on graph theory for the determination of the shortest paths for the establishment of new fiber optic networks.",
                    ]),
                    'github' => 'https://github.com/marvinboris/redesigned-fiesta.git',
                    'link' => 'https://rwa-tool.herokuapp.com/',
                    'date' => date('2019-10-30'),
                ],
                'technologies' => ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
            ],
        ];

        foreach ($items as $item) {
            Project::create($item['data'])->technologies()->sync(array_map(function ($technology) {
                return Technology::where('name', 'LIKE', "%$technology%")->first()->id;
            }, $item['technologies']));
        }
    }
}
