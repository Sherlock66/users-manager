<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('permissions')->delete();
        $now = \Carbon\Carbon::now();
        $permissions = [
            'list',
            'create',
            'edit',
            'delete'
         ];
         
         foreach ($permissions as $permission) {
              Permission::create([
                  'name' => $permission,
                  'created_at' => $now,
                  'updated_at' => $now
              ]);
         }
    }
}
