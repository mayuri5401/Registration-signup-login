import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'WelcomeScreen',component:WelcomeScreenComponent},
  {path:'registration',component:RegisterComponent},
  {path:'login',component:LoginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
