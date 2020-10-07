import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {Location} from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {
  regno:any;
  pfile : any;
  todash:any;
  loader = true;
  constructor(private service:AppService,private _location: Location,public router:ActivatedRoute,public rt:Router) {
    this.router.params.subscribe(params=>{
      if(window. sessionStorage.getItem('ureg')==params.regno){
        this.regno=params.regno;}
        else{
          alert("Not Auth");
          this.rt.navigate(['/adminlogin']);
        }
    })
   }
  ngOnInit():void {
    this.todash = this.service.getuserureg();
    this.service.profileadmin(this.regno).subscribe(data=>{
      this.pfile = data;
      console.log(this.pfile);
      this.loader = false;
    })
  }
  dash()
  {
    this.rt.navigate(['/admindash',{regno:JSON.parse(this.todash)}]);
  }
  loggout()
  {
     sessionStorage.clear();
    this.rt.navigate(['/adminlogin'])
  }
}
