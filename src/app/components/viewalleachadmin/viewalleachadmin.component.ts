import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-viewalleachadmin',
  templateUrl: './viewalleachadmin.component.html',
  styleUrls: ['./viewalleachadmin.component.css']
})
export class ViewalleachadminComponent implements OnInit {
  users1:any;
  uu:any;
  regno:any;
  myregno = sessionStorage.getItem('ureg'); 
  username:any;
  loader = true;
  constructor(private service:AppService,public router:ActivatedRoute,public rt:Router) { 
    this.router.params.subscribe(params=>{
        this.regno=params.regno;
    })
  }

  ngOnInit():void {
    this.service.admindashboard(this.regno).subscribe(data=>{
      this.users1 = data;
      this.loader = false;
      // console.log(this.users1);
    },
    (err)=>{
      if(err instanceof HttpErrorResponse) {
        if(err.status === 401){
          this.rt.navigate(['/adminlogin'])
          alert("You are not an authorised user.")
        }
      }
      if(err instanceof HttpErrorResponse){
        if(err.status === 500){
          this.rt.navigate(['/adminlogin'])
          alert("Internal Server Error")
        }
      }
      if(err instanceof HttpErrorResponse){
        if(err.status === 404){
          this.rt.navigate(['/adminlogin'])
          alert("Request Not Found")
        }
      }
    }
    )
  }
  eachint(uu){
    // console.log(uu.username);
    this.rt.navigate(['/alladmins/interns/tasks',{username:uu.username}])
  }
  loggout()
  {
     sessionStorage.clear();
    this.rt.navigate(['/adminlogin'])
  }
  dash()
  {
    this.rt.navigate(['/admindash',{regno:JSON.parse(this.myregno)}]);
  }

}
