import { Component, OnInit, OnDestroy } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  uname: Object;
  users:Object;
  uemail:Object;
  uopt:Object;
  ureg:Object;
  constructor(private service:AppService,public router:Router,private _location: Location) { }
  ngOnInit():void {
    this.uname = this.service.getuserun()
    this.uemail = this.service.getuserue()
    this.uopt = this.service.getuseruopt()
    this.ureg = this.service.getuserureg()
  }

  dash()
  {
    this._location.back();
  }
  loggout()
  {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
  ngOnDestroy() {

  }

}