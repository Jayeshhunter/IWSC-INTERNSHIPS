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
          window. sessionStorage.setItem('token',res.token)
          window. sessionStorage.setItem('ureg', JSON.stringify(res.admin.regno))
          setTimeout(()=>{
            this.router.navigate(['/admindash',{regno:res.admin.regno}])
            this.spinner.hide();
          },4000)
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
    var re = /^[0-9]{10,10}$/;
    return re.test(str);
  }  
  check(){
    if (this.registerAdminData.regno==null|| !this.checkRegno(this.registerAdminData.regno)){
      alert("Please provide register number having length 10 numeric characters.")
    } else if (this.registerAdminData.username == null || this.registerAdminData.username.length <= 5){
      alert("Please provide username with length greater than 5 characters")
    } else if (this.registerAdminData.password == null || !this.checkPassword(this.registerAdminData.password)){
      alert("Please enter a proper password having a length greather than 6 characters including atleast a lower case character , an upper case character, a number and a special character")
    }else if(this.registerAdminData.email==null || this.checkmail.test(this.registerAdminData.email)==false){
      alert("Email is of wrong format")
    }
    else{
      this.registerAdmin()
    }
  }
}
