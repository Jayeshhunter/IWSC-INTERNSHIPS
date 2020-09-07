import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-eachintern',
  templateUrl: './eachintern.component.html',
  styleUrls: ['./eachintern.component.css']
})
export class EachinternComponent implements OnInit {
  users1:any;
  username:any;
  uu:any;
  U:any;
  loader = true;
  constructor(private service:AppService,public router:ActivatedRoute,public rt:Router,private _location: Location) { 
    this.router.params.subscribe(params=>{
      this.username=params.username;
      this.U=params.id;
    })
  }
  ngOnInit():void {
    this.service.eachintern(this.username).subscribe(data=>{
      this.users1 = data;
      console.log(this.users1);
      this.loader = false;
    })
  }
  eacht(uu){
    console.log(uu._id);
    this.rt.navigate(['/admintask',{id:uu._id}])
  }
  loggout()
  {
    localStorage.clear();
    this.rt.navigate(['/adminlogin'])
  }
  dash()
  {
    this._location.back();
  }
  ngOnDestroy() {

  }

}