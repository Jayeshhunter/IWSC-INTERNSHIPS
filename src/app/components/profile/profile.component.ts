import { Component, OnInit, OnDestroy } from '@angular/core';
import {AppService} from '../../app.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  username:any;
  pfile : any;
  todash:any;
  loader = true;
  constructor(private service:AppService,public router:ActivatedRoute,public rt:Router,private _location: Location) {
    this.router.params.subscribe(params=>{
      this.username=params.username;
    })
   }
  ngOnInit():void {
    this.todash = this.service.getuserun();
    this.service.profile(this.username).subscribe(data=>{
      this.pfile = data;
      console.log(this.pfile);
      this.loader = false;
    })
    // this.uname = this.service.getuserun()
    // this.uemail = this.service.getuserue()
    // this.uopt = this.service.getuseruopt()
    // this.ureg = this.service.getuserureg()
  }

  dash()
  {
    this.rt.navigate(['/dashboard',{username:JSON.parse(this.todash)}])
  }
  loggout()
  {
     sessionStorage.clear();
    this.rt.navigate(['/login'])
  }
  ngOnDestroy() {

  }

}