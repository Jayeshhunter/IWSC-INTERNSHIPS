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
  task:any;
  id:any;
  yes:any;
  loader = true;
  constructor(private rs:AppService,public router:ActivatedRoute,public rt:Router,private _location: Location) {
    this.router.params.subscribe(params=>{
      this.id=params.id;
    })
    console.log(this.id);
   }
  
  ngOnInit():void {
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
    localStorage.clear();
    this.rt.navigate(['/login'])
  }
  dash()
  {
    this._location.back();
  }
}
