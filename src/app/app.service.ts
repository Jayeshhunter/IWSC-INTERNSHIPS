import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  url:string="https://floating-oasis-88507.herokuapp.com";

  //url:string="http://localhost:3000";

  constructor(private http:HttpClient) { 
  }
  signup(user)
  {
   return this.http.post(this.url+'/user/signup',user);
  }

  login(user)
  {
   return this.http.post(this.url+'/user/login',user);
  }
  alladmins(){
    return this.http.get(this.url+'/alladmins');
  }
  dashboard(username:any)
  {
    return this.http.get(this.url+'/user/dashboard/'+username);
  }
  taskone(id:any)
  {
    return this.http.get(this.url+'/user/taskone'+"?id="+id);
  }
  getToken()
  {
    return window.localStorage.getItem('token')
  }
  getuserun()
  {
    return window.localStorage.getItem('un')
  }
  getuserue()
  {
    return window.localStorage.getItem('ue')
  }
  getuserureg()
  {
    return window.localStorage.getItem('ureg')
  }
  getuseruopt()
  {
    return window.localStorage.getItem('uopt')
  }
  loggedIn()
  {
    return !!window.localStorage.getItem('token')
  }
  /*************************************************************************************************** */
  
  signupadmin(admin)
  {
   return this.http.post(this.url+'/admin/signup',admin);
  }

  loginadmin(admin)
  {
   return this.http.post(this.url+'/admin/login',admin);
  }
  addingtask(data)
  {
    return this.http.post(this.url+'/admin/addtask',data)
  }
  admindashboard(options:any)
  {
    return this.http.get(this.url+'/admin/dashboard/'+options);
  }
  eachintern(username:any)
  {
    return this.http.get(this.url+'/admin/dashboard/tasks/'+username);
  }
  eachtask(id:any)
  {
    return this.http.get(this.url+'/admin/dashboard/taskone/'+id);
  }
  approve(id:any){
    let body={
      id:id
    }
    return this.http.post(this.url+'/admin/dashboard/taskone/complete',body);
  }
  disapprove(id:any){
    let body={
      id:id
    }
    return this.http.post(this.url+'/admin/dashboard/taskone/incomplete',body);
  }
}
