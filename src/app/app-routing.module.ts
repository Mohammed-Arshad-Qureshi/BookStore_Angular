import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { SignupLoginComponent } from './Components/signup-login/signup-login.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  { path: "forget", component: ForgetPasswordComponent },
  { path: "resetpassword", component: ResetPasswordComponent },

  {
    path: "", component: SignupLoginComponent,
    children: [
      { path: "", component: LoginComponent },
      { path: "singup", component: SignupComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
