import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service'
import { ActivatedRoute,Router } from '@angular/router';
import {Location} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-viewalleachtask',
  templateUrl: './viewalleachtask.component.html',
  styleUrls: ['./viewalleachtask.component.css']
})
export class ViewalleachtaskComponent implements OnInit {
  task:any;
  regno:any;
  id:any;
  datemodi:any;
  todash:any;
  loader = true;
  constructor(private rs:AppService,public router:ActivatedRoute, private rt:Router,private _location: Location) {
    this.router.params.subscribe(params=>{
      this.id=params.id;
      this.regno = window. sessionStorage.getItem('ureg');
    })
    // console.log(this.id);
   }

   ngOnInit():void {
    this.todash = this.rs.getuserureg();
    this.rs.eachtask(this.id).subscribe(data=>{
      this.task = data;
      this.datees();
      // console.log(this.task);
      this.loader = false;
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
    this.rt.navigate(['/adminlogin'])
  }
  dash()
  {
    this.rt.navigate(['/admindash',{regno:JSON.parse(this.todash)}]);
  }

}
