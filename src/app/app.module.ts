import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
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
import {NgCircleProgressModule} from 'ng-circle-progress';
import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AuthGuard } from './auth.guard';
import {AdminauthGuard} from './adminauth.guard'
import {TokenInterceptorService} from './token-interceptor.service'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    TasksComponent,
    FirstComponent,
    AdmindashComponent,
    AdminloginComponent,
    AdminsignupComponent,
    AdminlandingComponent,
    EachinternComponent,
    AdminprofileComponent,
    AdmintaskComponent,
    AddtaskComponent,
    LoadingSpinnerComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      radius:50,
      outerStrokeWidth:8,
      innerStrokeWidth:4,
      outerStrokeColor:"red",
      innerStrokeColor:"orange",
      animationDuration:300
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthGuard,AdminauthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
