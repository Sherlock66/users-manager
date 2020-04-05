import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent, canActivate: [BeforeLoginService]},
  { path:'profile', component: ProfileComponent, canActivate: [AfterLoginService]},
  { path:'request-password-reset', component: RequestResetComponent },
  { path:'response-password-reset', component: ResponseResetComponent },
  { path:'users', component: UsersComponent, canActivate: [AfterLoginService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
