import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
export class Admin {
  public username: any;
  public password: any;
}

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginAdminData = new Admin();
  yes:any;
  yess:any;
  constructor(private service:AppService,public router:Router,private spinner: NgxSpinnerService) { }
  loginAdmin () {
    this.spinner.show();
    setTimeout(()=>{
      this.service.loginadmin(this.loginAdminData)
      .subscribe(
        (res:any) => {
          window. sessionStorage.setItem('token', res.token)
          window. sessionStorage.setItem('ureg',(res.admin.regno))
          setTimeout(()=>{
            this.router.navigate(['/admindash',{regno:res.admin.regno}])
            this.spinner.hide();
          },4000)
        },
        (err)=>{
          if(err instanceof HttpErrorResponse){
            if(err.status === 400){
              console.log(err)
              alert(err.error);
              this.spinner.hide();
            }
          }
        }
      )
    },1000) 
  }
  allog(){
    this.yes = this.service.getuserureg()
    this.yess = this.service.loggedIn()
    if(this.yess)
    {
      this.router.navigate(['/admindash',{regno:JSON.parse(this.yes)}])
    }
    else{
      alert("You are not loggedIn. Try to loggin again.")
      this.router.navigate(['/adminlogin'])
    }
  }
  ngOnInit() {
  }
  check(){
    if(this.loginAdminData.username==null){
      alert("Username is Empty")
    }else if(this.loginAdminData.password==null){
      alert("Password is Empty")
    }
    else{
      this.loginAdmin()
    }
  }

}
