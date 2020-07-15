import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { UploadComponent } from './upload/upload.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path :'' , component:WelcomeComponent} ,
  {path :'login' , component:LoginComponent},
  {path :'cart' , component:CartComponent},
  {path :'welcome/:name' , component:WelcomeComponent},
  {path :'welcome' , component:WelcomeComponent},
  {path :'registration' , component:RegistrationComponent},
  {path :'upload' , component:UploadComponent},
  {path :'logout' , component:LogoutComponent},
  {path : 'admin' , component:AdminComponent},
  {path :'**' ,component:ErrorComponent}   

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
    
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
