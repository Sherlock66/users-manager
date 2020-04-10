<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Permission;
use App\User;
use Spatie\Permission\Models\Role;

use Illuminate\Support\Facades\Auth;

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
        // DB::table('users')->truncate();
        
        // $now = \Carbon\Carbon::now();

        //les parametre de l'admin
        // $credentialAdmin = [
        //     'name'  => 'Armel Nya',
        //     'email' => 'armelnganji@gmail.com',
        //     'password' => bcrypt('armel'),
        //     'created_at' => $now,
        //     'updated_at' => $now

        // ];
        // $user = User::create($credentialAdmin); //we create the admin user
        
       
        // $role = Role::create(['name' => 'Admin']); // we create the role of admin
        $role = Role::create(['name' => 'Member']);
        $permissions = Permission::pluck('id','id')->all();
        $role->syncPermissions($permissions);
        // $user->assignRole([$role->id]);
      
    }
}
