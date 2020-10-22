import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
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
  users1:any;
  regno:any;
  todash:any;
  loader = true;
  constructor(private service:AppService,public router:Router,private _location: Location) { 
    this.regno = window. sessionStorage.getItem('ureg');
  }
  onSubmit()
  {
    this.service.addingtask(this.newTask).subscribe((result)=>{
      // console.warn(result);
      alert("Task assigned successfully !!!")
      this.router.navigate(['/eachintern',{username:this.newTask.username}]);
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status === 500){
          this.router.navigate(['/login'])
          alert("Internal Server Error")
        }
      }
      if(err instanceof HttpErrorResponse){
        if(err.status === 404){
          this.router.navigate(['/login'])
          alert("Request Not Found")
        }
      }
    })
  }
  onSubnew(){
    for (var i = 0; i < this.users1.length ; i++){
      this.newTask.username = this.users1[i].username;
      this.service.addingtask(this.newTask).subscribe((result)=>{
        console.warn(result);
      })
    }
    this.router.navigate(['/admindash',{regno:JSON.parse(this.todash)}]);
  }
  loggout()
  {
     sessionStorage.clear();
    this.router.navigate(['/adminlogin'])
  }
  dash()
  {
    this.router.navigate(['/admindash',{regno:JSON.parse(this.todash)}]);
  }

  check(){
    if(this.newTask.username==null){
      alert("Please enter Intern's name")
    }else if(this.newTask.options==null){
      alert("Please enter your ID")
    }else if(this.newTask.taskname==null){
      alert("Please enter Task name")
    }else if(this.newTask.enddate==null){
      alert("Please enter deadline")
    }else if(this.newTask.taskdetails==null){
      alert("Please enter task details")
    }
    else{
      this.onSubmit()
    }
  }
  ngOnInit():void {
    this.todash = this.service.getuserureg();
    this.newTask.options = window. sessionStorage.getItem('ureg');
    this.service.admindashboard(window. sessionStorage.getItem('ureg')).subscribe(data=>{
      this.users1 = data;
      this.loader = false;
      console.log(this.users1);
    }
    )
  }

}
