<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
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
                'name' => 'Français',
                'abbr' => 'fr',
                'flag' => 'FR'
            ],
            [
                'name' => 'English',
                'abbr' => 'en',
                'flag' => 'GB'
            ],
        ];

        foreach ($items as $item) {
            Language::create($item);
        }
    }
}
