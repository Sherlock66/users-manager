<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use Spatie\Permission\Models\Role;
use DB;
use Hash;
use App\Http\Requests\RegisterRequest;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        $data = User::orderBy('id','DESC')->paginate(5);
        $roles = Role::pluck('name','name')->all();

        return response()->json(["data" => $data, "roles" => $roles]);
        // return response()->json($data);
        
        
        // return view('users.index',compact('data'))
        //     ->with('i', ($request->input('page', 1) - 1) * 5);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // /create a new User
        $roles = Role::pluck('name','name')->all();
        //return view('users.create', compact('roles'));
        return response()->json($roles);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RegisterRequest $request)
    {
        User::create($request->all());
        // $roles = Role::pluck('name','name')->all();
        // return response()->json($roles);

        // $roles = Role::pluck('name','name')->all();
        //  function save the new user with role
        // $this->validate($request, [
        //     'email' => 'required|email|unique:users,email',
        //     'name' => 'required',
        //     'password' => 'required|same:confirm-password',
            
        // ]);
        // $input = $request->all(); //on recupere tout les champ
        // $input['password'] = Hash::make($input['password']); // on crypte le champ paswword
        // $user = User::find($id);
        // $user->update($input); // if the user exists, we update it else we create it
        
        // DB::table('model_has_roles')->where('model_id',$id)->delete(); //we delete the rule we enter the same rule
        // $user->assignRole($request->input('roles')); // and we assign rule to user
        
        return response()->setStatusCode(200);
        // return redirect()->route('users.index')
                            // ->with('success', 'Utilisateur mise à jour avec succes');
        
    }

    /**
     * Display the specified resource.
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
        User::find($id)->delete();
        return response()->json(null, 204);
        // return redirect()->route('users.index')
        //                      ->with('succcess',' User has been deleted successful');
    }
}
