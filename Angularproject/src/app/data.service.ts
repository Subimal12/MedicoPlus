import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  userList():Observable<User[]>
  {
       let url ="http://localhost:3000/list";
       return this.http.get<User[]>(url);
    
  } 
  addUser(user: User):Observable<any>
  {
       let url ="http://localhost:3000/save";
       
       const httpOptions= {headers: new HttpHeaders({'Content-Type':'application/json'})}; //changed here
  
       const json = JSON.stringify(user); //changed here
       return this.http.post(url,json,httpOptions);  //changed here
   }

   onSubmit(user: User):Observable<any>
   {
        let url ="http://localhost:3000/submit";
        
        const httpOptions= {headers: new HttpHeaders({'Content-Type':'application/json'})}; //changed here
   
        const json = JSON.stringify(user); //changed here 
        return this.http.post(url,json,httpOptions);  //changed here
    } 
    
}
