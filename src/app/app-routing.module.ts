import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FirstComponent } from './components/first/first.component';
import { AdmindashComponent } from './components/admindash/admindash.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './components/adminsignup/adminsignup.component';
import { AdminlandingComponent } from './components/adminlanding/adminlanding.component';
import { EachinternComponent } from './components/eachintern/eachintern.component';
import { AdmintaskComponent } from './components/admintask/admintask.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { ViewalldashComponent } from './components/viewalldash/viewalldash.component';
import { ViewalleachinternComponent } from './components/viewalleachintern/viewalleachintern.component';
import { ViewalleachtaskComponent } from './components/viewalleachtask/viewalleachtask.component';
import { ViewalleachadminComponent } from './components/viewalleachadmin/viewalleachadmin.component';
import { AuthGuard } from './auth.guard';
import {AdminauthGuard} from './adminauth.guard'
import {} from '@angular/router'

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'land',component:LandingComponent},
  {path:'profile/:username',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'list/:id',component:TasksComponent,canActivate:[AuthGuard]},
  {path:'',component:FirstComponent},
  {path:'admindash',component:AdmindashComponent,canActivate:[AdminauthGuard]},
  {path:'adminlanding',component:AdminlandingComponent},
  {path:'adminsignup',component:AdminsignupComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'eachintern',component:EachinternComponent,canActivate:[AdminauthGuard]},
  {path:'admintask',component:AdmintaskComponent,canActivate:[AdminauthGuard]},
  {path:'addtask',component:AddtaskComponent,canActivate:[AdminauthGuard]},
  {path:'adminprofile/:regno',component:AdminprofileComponent,canActivate:[AdminauthGuard]},
  {path:'alladmins',component:ViewalldashComponent,canActivate:[AdminauthGuard]},
  {path:'alladmins/interns',component:ViewalleachadminComponent,canActivate:[AdminauthGuard]},
  {path:'alladmins/interns/tasks',component:ViewalleachinternComponent,canActivate:[AdminauthGuard]},
  {path:'alladmins/interns/tasks/onetask',component:ViewalleachtaskComponent,canActivate:[AdminauthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy:PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
