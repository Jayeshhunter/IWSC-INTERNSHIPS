import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {Location} from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {
  regno:any;
  pfile : any;
  todash:any;
  loader = true;
  constructor(private service:AppService,private _location: Location,public router:ActivatedRoute,public rt:Router) {
    this.router.params.subscribe(params=>{
      if(window. sessionStorage.getItem('ureg')==params.regno){
        this.regno=params.regno;}
        else{
          alert("Not Authorized");
          this.rt.navigate(['/adminlogin']);
        }
    })
   }
  ngOnInit():void {
    this.todash = this.service.getuserureg();
    this.service.profileadmin(this.regno).subscribe(data=>{
      this.pfile = data;
      // console.log(this.pfile);
      this.loader = false;
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status === 500){
          this.rt.navigate(['/login'])
          alert("Internal Server Error")
        }
      }
      if(err instanceof HttpErrorResponse){
        if(err.status === 404){
          this.rt.navigate(['/login'])
          alert("Request Not Found")
        }
      }
    })
  }
  dash()
  {
    this.rt.navigate(['/admindash',{regno:JSON.parse(this.todash)}]);
  }
  loggout()
  {
     sessionStorage.clear();
    this.rt.navigate(['/adminlogin'])
  }
}
