import { Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:any
  tasks:any;
  username:any;
  yes:any;
  loader = true;
  constructor(private service:AppService,public router:ActivatedRoute,public rt:Router) { 
    this.router.params.subscribe(params=>{
      this.username=params.username;
    })
  }

  ngOnInit():void {
    this.service.dashboard(this.username).subscribe(data=>{
      this.tasks = data;
      console.log(this.tasks);
      this.loader = false;
    },
    (err)=>{
      if(err instanceof HttpErrorResponse) {
        if(err.status === 401){
          this.rt.navigate(['/login'])
          alert("You are not an authorised user.")
        }
      }
    })
  }
  loggout()
  {
    localStorage.clear();
    this.rt.navigate(['/login'])
  }
  dash()
  {
    this.rt.navigate(['/dashboard',{username:JSON.parse(this.yes)}])
  }
}
