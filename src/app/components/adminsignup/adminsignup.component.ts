import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
export class Admin {
  public regno: any;
  public username: any;
  public password: any;
  public email: string;
}

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {
  registerAdminData = new Admin();
  checkmail=/^([a-z 0-9 \.-]+)@([a-z 0-9 -]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
  constructor(private service:AppService,public router:Router,private spinner: NgxSpinnerService) { }
  
  ngOnInit() {
  }
  registerAdmin(){
    this.spinner.show();
    setTimeout(()=>{
      this.service.signupadmin(this.registerAdminData)
      .subscribe(
        (res:any) =>{
          window.localStorage.setItem('token',res.token)
          window.localStorage.setItem('un', JSON.stringify(res.admin.username))
          window.localStorage.setItem('ue', JSON.stringify(res.admin.email))
          window.localStorage.setItem('ureg', JSON.stringify(res.admin.regno))
          setTimeout(()=>{
            alert("SIGNUP WAS SUCCESSFULL !!!");
            this.router.navigate(['/admindash',{regno:res.admin.regno}])
            this.spinner.hide();
          },4000)
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
    if(this.registerAdminData.regno==null){
      alert("Register Number is Empty")
    }if(this.registerAdminData.username==null){
      alert("Username is Empty")
    }if(this.registerAdminData.password==null){
      alert("Password is Empty")
    }if(this.registerAdminData.email==null){
      alert("Email is Empty")
    }if(this.checkmail.test(this.registerAdminData.email)==false){
      alert('Wrong Email Format')
    }
    else{
      this.registerAdmin()
    }
  }
}
