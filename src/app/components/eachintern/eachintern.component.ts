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
  regno:any;
  todash:any;
  loader = true; 
  usernames:any;
  comp = [];
  incomp = [];
  constructor(private service:AppService,public router:ActivatedRoute,public rt:Router,private _location: Location) { 
    this.router.params.subscribe(params=>{
      this.username=params.username;
      this.U=params.id;
      this.regno = window. sessionStorage.getItem('ureg');
    })
  }
  ngOnInit():void {
    this.todash = this.service.getuserureg();
    this.service.eachintern(this.username).subscribe(data=>{
      this.users1 = data;
      this.usernames = data[0].username;
      this.distribute();
      this.loader = false;
    })
  }
  distribute(){
    for(var i = 0; i< this.users1.length;i++){
      if(this.users1[i].complete=="Completed"){
        this.comp.push(this.users1[i]);
      }
      else if(this.users1[i].complete=="Incomplete"){
        this.incomp.push(this.users1[i]);
      }
    }
    console.log(this.comp);
    console.log(this.incomp);
  }
  eacht(uu){
    console.log(uu._id);
    this.rt.navigate(['/admintask',{id:uu._id}])
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
  ngOnDestroy() {

  }

}