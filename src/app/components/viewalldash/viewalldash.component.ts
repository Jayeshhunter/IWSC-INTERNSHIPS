import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-viewalldash',
  templateUrl: './viewalldash.component.html',
  styleUrls: ['./viewalldash.component.css']
})
export class ViewalldashComponent implements OnInit {
  users1:any;
  allu = [];
  uu:any;
  myregno = sessionStorage.getItem('ureg');
  regno:any;
  username:any;
  loader = true;
  constructor(private service:AppService,public router:ActivatedRoute,public rt:Router) { }

  ngOnInit():void {
    this.service.alladmins().subscribe(data=>{
      this.users1 = data;
      this.loader = false;
      this.distribute();
      // console.log(this.users1);
    },
    (err)=>{
      if(err instanceof HttpErrorResponse) {
        if(err.status === 401){
          this.rt.navigate(['/adminlogin'])
          alert("You are not an authorised user.")
        }
      }
      if(err instanceof HttpErrorResponse){
        if(err.status === 500){
          this.rt.navigate(['/adminlogin'])
          alert("Internal Server Error")
        }
      }
      if(err instanceof HttpErrorResponse){
        if(err.status === 404){
          this.rt.navigate(['/adminlogin'])
          alert("Request Not Found")
        }
      }
    }
    )
  }
  distribute(){
    for(var i = 0; i< this.users1.length;i++){
      if(this.users1[i].regno!==JSON.parse(sessionStorage.getItem('ureg'))){
        this.allu.push(this.users1[i]);
        console.log(this.users1[i].regno)
        console.log(sessionStorage.getItem('ureg'))
      }
    }
  }
  eachint(uu){
    // console.log(uu.username);
    this.rt.navigate(['/alladmins/interns',{regno:uu.regno}])
  }
  dash()
  {
    this.rt.navigate(['/admindash',{regno:JSON.parse(this.myregno)}]);
  }
  loggout()
  {
     sessionStorage.clear();
    this.rt.navigate(['/adminlogin'])
  }
}
