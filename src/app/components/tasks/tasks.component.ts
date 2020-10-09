import { Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service'
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  username:any;
  task:any;
  id:any;
  todash:any;
  datemodi:any;
  loader = true;
  constructor(private rs:AppService,public router:ActivatedRoute,public rt:Router,private _location: Location) {
    this.router.params.subscribe(params=>{
      this.username = JSON.parse(window. sessionStorage.getItem('un'));
      this.id=params.id;
    })
    // console.log(this.id);
   }
  ngOnInit():void {
    this.todash = this.rs.getuserun();
    this.rs.taskone(this.id).subscribe(data=>{
      this.loader = false;
      this.task = data;
      this.datees();
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
  datees(){
    this.datemodi = this.revv(this.task.enddate)
  }
  revv(d:any){
    return d.split("-").reverse().join("/");
  }
  loggout()
  {
     sessionStorage.clear();
    this.rt.navigate(['/login'])
  }
  dash()
  {
    this.rt.navigate(['/dashboard',{username:JSON.parse(this.todash)}])
  }
}
