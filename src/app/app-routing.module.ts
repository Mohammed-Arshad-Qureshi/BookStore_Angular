import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupLoginComponent } from './Components/signup-login/signup-login.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [

  {path: "",component:SignupLoginComponent,
  children:[
    {path:"singup",component:SignupComponent},
    {path:"login",component:LoginComponent}
  ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
