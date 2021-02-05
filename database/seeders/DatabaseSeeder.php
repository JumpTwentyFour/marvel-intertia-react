<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if (!User::where('email', 'alex@jump24.co.uk')->exists()) {
            User::factory()->create([
                'email' => 'alex@jump24.co.uk',
                'password' => bcrypt('testing')
            ]);
        }

        if (!User::where('email', 'anneka@jump24.co.uk')->exists()) {
            User::factory()->create([
                'email' => 'anneka@jump24.co.uk',
                'password' => bcrypt('testing')
            ]);
        }

        if (!User::where('email', 'dan@jump24.co.uk')->exists()) {
            User::factory()->create([
                'email' => 'dan@jump24.co.uk',
                'password' => bcrypt('testing')
            ]);
        }

        if (!User::where('email', 'luke@jump24.co.uk')->exists()) {
            User::factory()->create([
                'email' => 'luke@jump24.co.uk',
                'password' => bcrypt('testing')
            ]);
        }

        if (config('app.env') === 'local') {
            if (!User::where('email', 'cypress@jump24.co.uk')->exists()) {
                User::factory()->create([
                    'email' => 'cypress@jump24.co.uk',
                    'password' => bcrypt('testing')
                ]);
            }
        }
    }
}
