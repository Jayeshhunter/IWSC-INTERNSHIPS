import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
export class User {
  public username: any;
  public password: any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = new User();
  
  yes:any;
  yess:any;
  constructor(private service:AppService,public router:Router,private spinner: NgxSpinnerService) { }
  loginUser () {
    this.spinner.show();
    setTimeout(()=>{
      this.service.login(this.loginUserData)
      .subscribe(
        (res:any) => {
          window.localStorage.setItem('token', res.token)
          window.localStorage.setItem('un', JSON.stringify(res.user.username))
          window.localStorage.setItem('ue', JSON.stringify(res.user.email))
          window.localStorage.setItem('ureg', JSON.stringify(res.user.regno))
          window.localStorage.setItem('uopt', JSON.stringify(res.user.options))
          setTimeout(() => {
            this.router.navigate(['/dashboard',{username:res.user.username}])
            this.spinner.hide();
          }, 4000);
        },
        (err)=>{
          if(err instanceof HttpErrorResponse){
            if(err.status === 400){
              console.log(err)
              alert(err.error);
              this.spinner.hide();
            }
          }
          if(err instanceof HttpErrorResponse) {
            if(err.status === 401){
              alert(err.error);
              this.spinner.hide();
            }
          }
        }
      ) 
    },1000)
  }
  allog(){
    this.yes = this.service.getuserun()
    this.yess = this.service.loggedIn()
    if(this.yess)
    {
      this.router.navigate(['/dashboard',{username:JSON.parse(this.yes)}])
    }
    else{
      alert("You are not loggedIn. Try to loggin again.")
      this.router.navigate(['/login'])
    }
  }
  ngOnInit() {
  }

}
