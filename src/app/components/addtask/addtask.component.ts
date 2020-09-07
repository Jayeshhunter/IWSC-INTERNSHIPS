import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
export class Task {
  public username: any;
  public options:any;
  public taskname: any;
  public enddate: string;
  public taskdetails: any;
}
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  newTask = new Task();
  constructor(private service:AppService,public router:Router,private _location: Location) { }
  onSubmit()
  {
    this.service.addingtask(this.newTask).subscribe((result)=>{
      console.warn(result);
      alert("Task assigned successfully !!!")
      this._location.back();
    })
  }
  loggout()
  {
    localStorage.clear();
    this.router.navigate(['/adminlogin'])
  }
  dash()
  {
    this._location.back();
  }

  check(){
    if(this.newTask.username==null){
      alert("Please enter Intern's name")
    }if(this.newTask.options==null){
      alert("Please enter your ID")
    }if(this.newTask.taskname==null){
      alert("Please enter Task name")
    }if(this.newTask.enddate==null){
      alert("Please enter deadline")
    }if(this.newTask.taskdetails==null){
      alert("Please enter task details")
    }
    else{
      this.onSubmit()
    }
  }
  ngOnInit() {
  }

}
