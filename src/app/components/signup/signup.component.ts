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
          window. sessionStorage.setItem('token',res.token)
          window. sessionStorage.setItem('un', JSON.stringify(res.user.username))
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
              alert("Username already exists!");
              this.spinner.hide();
            }
          }
        }
      )
    },1000)
  }
  checkPassword(str) {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  return re.test(str);
  }
  checkRegno(str) {
    var re = /^[0-9]{4,7}$/;
    return re.test(str);
    }
  check(){
    if(this.registerUserData.regno==null|| !this.checkRegno(this.registerUserData.regno)){
      alert("Please provide register number having length between 4-7 numeric characters.")
    } else if (this.registerUserData.username == null || this.registerUserData.username.length <= 5 ){
      alert("Please provide username with length greater than 5 characters")
    } else if (this.registerUserData.password == null || !this.checkPassword(this.registerUserData.password)){
      alert("Please enter a proper password having a length greather than 6 characters including atleast a lower case character , an upper case character, a number and a special character");
    }else if(this.registerUserData.options==null){
      alert("Mentor ID is Empty")
    }else if(this.registerUserData.email==null || this.checkmail.test(this.registerUserData.email)==false){
      alert("Email is of wrong format")
    }
    else{
      this.registerUser()
    }
  }
}