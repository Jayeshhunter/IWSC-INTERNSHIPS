import { Component, OnInit, OnDestroy } from '@angular/core';
import {AppService} from '../../app.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  username:any;
  pfile : any;
  todash:any;
  loader = true;
  constructor(private service:AppService,public router:ActivatedRoute,public rt:Router,private _location: Location) {
    this.router.params.subscribe(params=>{
      if(window. sessionStorage.getItem('un')=='"'+params.username+'"'){
        this.username=params.username;}
        else{
          alert("Not Authorized");
          this.rt.navigate(['/login']);
        }
    })
   }
  ngOnInit():void {
    this.todash = this.service.getuserun();
    this.service.profile(this.username).subscribe(data=>{
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
    this.rt.navigate(['/dashboard',{username:JSON.parse(this.todash)}])
  }
  loggout()
  {
     sessionStorage.clear();
    this.rt.navigate(['/login'])
  }
  ngOnDestroy() {

  }

}