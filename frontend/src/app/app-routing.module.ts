import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { UsersComponent } from './components/users/users.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserDetailComponent } from './components/user-data/user-detail/user-detail.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent, canActivate: [BeforeLoginService]},
  { path:'comments', component: CommentsComponent, canActivate: [AfterLoginService]},
  { path:'users', component: UsersComponent, canActivate: [AfterLoginService]},
  { path:'users/:id/edit',component: UserDetailComponent , canActivate: [AfterLoginService]},
  { path:'users/:id',component: UserDataComponent , canActivate: [AfterLoginService]},
  { path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
