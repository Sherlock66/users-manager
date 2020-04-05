<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //delete the users and make the id in 0
        DB::table('users')->truncate();
        
        $now = \Carbon\Carbon::now();

        //les parametre de l'admin
        $credentialAdmin = [
            'name'  => 'Armel Nya',
            'email' => 'armelnganji@gmail.com',
            'password' => bcrypt('armel'),
            'created_at' => $now,
            'updated_at' => $now
        ];
        $user = User::create($credentialAdmin); //we create the admin user
    }
}
