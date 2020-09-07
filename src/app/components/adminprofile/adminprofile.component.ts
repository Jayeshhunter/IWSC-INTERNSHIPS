import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  constructor(private service:AppService,private _location: Location,public router:Router) { }
  users:Object;
  uname: Object;
  uemail:Object;
  ureg:Object;
  ngOnInit():void {
    this.uname = this.service.getuserun()
    this.uemail = this.service.getuserue()
    this.ureg = this.service.getuserureg()
  }
  dash()
  {
    this._location.back();
  }
  loggout()
  {
    localStorage.clear();
    this.router.navigate(['/adminlogin'])
  }
}
