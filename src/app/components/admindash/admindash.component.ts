import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  users1:any;
  uu:any;
  regno:any;
  username:any;
  loader = true;
  constructor(private service:AppService,public router:ActivatedRoute,public rt:Router) {
    this.router.params.subscribe(params=>{
      this.regno=params.regno;
      this.username=params.username;
    })
   }
  ngOnInit():void {
    this.service.admindashboard(this.regno).subscribe(data=>{
      this.loader = false;
      this.users1 = data;
      console.log(this.users1);
    },
    (err)=>{
      if(err instanceof HttpErrorResponse) {
        if(err.status === 401){
          this.rt.navigate(['/adminlogin'])
          alert("You are not an authorised user.")
        }
      }
    }
    )
  }
  eachint(uu){
    console.log(uu.username);
    this.rt.navigate(['/eachintern',{username:uu.username}])
  }
  loggout()
  {
    localStorage.clear();
    this.rt.navigate(['/adminlogin'])
  }
  ngOnDestroy() {

  }

}