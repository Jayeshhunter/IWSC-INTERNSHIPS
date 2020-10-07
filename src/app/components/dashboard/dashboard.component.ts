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
  comp = [];
  incomp = [];
  loader = true;
  constructor(private service:AppService,public router:ActivatedRoute,public rt:Router) { 
    this.router.params.subscribe(params=>{
      if(window. sessionStorage.getItem('un')=='"'+params.username+'"'){
      this.username=params.username;}
      else{
        alert("Not Auth");
        this.rt.navigate(['/login']);
      }
    })
  }

  ngOnInit():void {
    this.service.dashboard(this.username).subscribe(data=>{
      this.tasks = data;
      this.loader = false;
      this.distribute()
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
  distribute(){
    for(var i = 0; i< this.tasks.length;i++){
      if(this.tasks[i].complete=="Completed"){
        this.comp.push(this.tasks[i]);
      }
      else if(this.tasks[i].complete=="Incomplete"){
        this.incomp.push(this.tasks[i]);
      }
    }
    console.log(this.comp);
    console.log(this.incomp);
  }
  loggout()
  {
     sessionStorage.clear();
    this.rt.navigate(['/login'])
  }
  dash()
  {
    this.rt.navigate(['/dashboard',{username:JSON.parse(this.yes)}])
  }
}
