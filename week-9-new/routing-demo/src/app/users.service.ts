import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'



interface dataType{
  name:string,
  id:number,
  indian:boolean,
  address:any
} 

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
 
    getData()
    {
      const data:dataType={
        name:"krishika",
        id:10,
        indian:true,
        address:"Ahemdabad,Gujarat",
      }
    return data;
      
    }
    // let url= "https://jsonplaceholder.typicode.com/todos/";
    // return this.http.get(url); 
  }
