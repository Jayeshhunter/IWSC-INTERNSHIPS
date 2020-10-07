import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service'
import { ActivatedRoute,Router } from '@angular/router';
import {Location} from '@angular/common';
export class Remarks {
  public remark: any;
}
@Component({
  selector: 'app-admintask',
  templateUrl: './admintask.component.html',
  styleUrls: ['./admintask.component.css']
})
export class AdmintaskComponent implements OnInit {
  task:any;
  regno:any;
  id:any;
  datemodi:any;
  todash:any;
  loader = true;
  RR = new Remarks();
  constructor(private rs:AppService,public router:ActivatedRoute, private rt:Router,private _location: Location) {
    this.router.params.subscribe(params=>{
      this.id=params.id;
      this.regno = window. sessionStorage.getItem('ureg');
    })
    console.log(this.id);
   }
  
  ngOnInit():void {
    this.todash = this.rs.getuserureg();
    this.rs.eachtask(this.id).subscribe(data=>{
      this.task = data;
      this.datees();
      console.log(this.task);
      this.loader = false;
    })
  }
  datees(){
    this.datemodi = this.revv(this.task.enddate)
  }
  revv(d:any){
    return d.split("-").reverse().join("/");
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
  delete(id:any){
    this.rs.delete(id).subscribe((res)=>{
      console.log(res);
      alert("The task has been Deteted");
      this._location.back();
    })
  }
  remarks(){
    this.rs.remark(this.id,this.RR).subscribe((result)=>{
      window.console.log(result);
      window.alert("Task remarked successfully !!!")
      window.location.reload();
    })
  } 
  loggout()
  {
     sessionStorage.clear();
    this.rt.navigate(['/adminlogin'])
  }
  dash()
  {
    this.rt.navigate(['/admindash',{regno:JSON.parse(this.todash)}]);
  }

  }


