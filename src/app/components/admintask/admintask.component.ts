import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service'
import { ActivatedRoute,Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-admintask',
  templateUrl: './admintask.component.html',
  styleUrls: ['./admintask.component.css']
})
export class AdmintaskComponent implements OnInit {
  task:any;
  id:any;
  loader = true;
  constructor(private rs:AppService,public router:ActivatedRoute, private rt:Router,private _location: Location) {
    this.router.params.subscribe(params=>{
      this.id=params.id;
    })
    console.log(this.id);
   }
  
  ngOnInit():void {
    this.rs.eachtask(this.id).subscribe(data=>{
      this.task = data;
      console.log(this.task);
      this.loader = false;
    })
  }
  approve(id:any){
    this.rs.approve(id).subscribe((res)=>{
      console.log(res);
      alert("The task has been updated to Completed");
      this._location.back();
    })
  }  
  
  disapprove(id:any){
    this.rs.disapprove(id).subscribe((res)=>{
      console.log(res);
      alert("The task has been updated to Incompleted");
      this._location.back();
    })
  }  
  loggout()
  {
    localStorage.clear();
    this.rt.navigate(['/adminlogin'])
  }
  dash()
  {
    this._location.back();
  }

  }


