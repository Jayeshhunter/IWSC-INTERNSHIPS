import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import * as EmailValidator from 'email-validator';
import { NgxSpinnerService } from "ngx-spinner";
export class User {
  public regno: any;
  public username: any;
  public password: any;
  public options:any;
  public email: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerUserData = new User();
  admins:any
  checkmail=/^([a-z 0-9 \.-]+)@([a-z 0-9 -]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
  constructor(private service:AppService,public router:Router,private spinner: NgxSpinnerService) { }
  
  ngOnInit() {
    this.service.alladmins().subscribe(data=>{
      this.admins = data
      console.log(this.admins)
    })
  }
  registerUser(){
    this.spinner.show();
    setTimeout(()=>{
      this.service.signup(this.registerUserData)
      .subscribe(
        (res:any) =>{
          EmailValidator.validate(this.registerUserData.email)
          window.localStorage.setItem('token',res.token)
          window.localStorage.setItem('un', JSON.stringify(res.user.username))
          window.localStorage.setItem('ue', JSON.stringify(res.user.email))
          window.localStorage.setItem('ureg', JSON.stringify(res.user.regno))
          window.localStorage.setItem('uopt', JSON.stringify(res.user.options))
          setTimeout(() => {
            alert("SIGNUP WAS SUCCESSFULL !!!")
            this.router.navigate(['/dashboard',{username:res.user.username}])
            this.spinner.hide();
          }, 4000);
        },
        (err)=>{
          if(err instanceof HttpErrorResponse){
            if(err.status === 400){
              console.log(err)
              alert("Please verify your RegNo. and try to change your Username");
              this.spinner.hide();
            }
          }
        }
      )
    },1000)
  }
  check(){
    if(this.registerUserData.regno==null){
      alert("Register Number is Empty")
    }if(this.registerUserData.username==null){
      alert("Username is Empty")
    }if(this.registerUserData.password==null){
      alert("Password is Empty")
    }if(this.registerUserData.options==null){
      alert("Options is Empty")
    }if(this.registerUserData.email==null){
      alert("Email is Empty")
    }
    if(this.checkmail.test(this.registerUserData.email)==false){
      alert('Wrong Email Format')
    }
    else{
      this.registerUser()
    }
  }
}
