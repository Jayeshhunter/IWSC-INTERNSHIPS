import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  // url:string="https://iw-intern-portal-backend-app.herokuapp.com";

  url:string="https://iw-backend-internship.herokuapp.com";

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
  profile(username:any)
  {
    return this.http.get(this.url+'/user/profile/'+username);
  }
  getToken()
  {
    return window. sessionStorage.getItem('token')
  }
  getuserun()
  {
    return window. sessionStorage.getItem('un')
  }
  getuserue()
  {
    return window. sessionStorage.getItem('ue')
  }
  getuserureg()
  {
    return window. sessionStorage.getItem('ureg')
  }
  getuseruopt()
  {
    return window. sessionStorage.getItem('uopt')
  }
  loggedIn()
  {
    return !!window. sessionStorage.getItem('token')
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
  profileadmin(regno:any)
  {
    return this.http.get(this.url+'/admin/profile/'+regno);
  }
  delete(id:any){
    return this.http.get(this.url+'/admin/dashboard/taskone/delete/'+id)
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
  remark(id:any,remark){
    return this.http.post(this.url+'/admin/dashboard/taskone/remark/'+id,remark);
  }
}
