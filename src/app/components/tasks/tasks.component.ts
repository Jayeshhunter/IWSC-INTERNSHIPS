import { Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service'
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
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
  loader = true;
  constructor(private rs:AppService,public router:ActivatedRoute,public rt:Router,private _location: Location) {
    this.router.params.subscribe(params=>{
      this.username = JSON.parse(window. sessionStorage.getItem('un'));
      this.id=params.id;
    })
    console.log(this.id);
   }
  
  ngOnInit():void {
    this.todash = this.rs.getuserun();
    this.rs.taskone(this.id).subscribe
    (
      (response)=>
      {
        this.loader = false;
        console.log("for one",response)
        this.task = response;
      }
    ),
    (error)=>console.log(error);
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
