<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
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
                'name' => 'Boris Ndouma',
                'phone' => '237655588688',
                'email' => 'jaris.ultio.21@gmail.com',
                'password' => Hash::make('adminadmin'),
                'language_id' => 1,
            ],
        ];

        foreach ($items as $item) {
            Admin::create($item);
        }
    }
}
