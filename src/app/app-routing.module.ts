import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path :'' , component:WelcomeComponent} ,
  {path :'login' , component:LoginComponent},
  {path :'welcome/:name' , component:WelcomeComponent},
  {path :'registration' , component:RegistrationComponent},
  {path :'logout' , component:LogoutComponent},
  {path :'**' ,component:ErrorComponent}   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
