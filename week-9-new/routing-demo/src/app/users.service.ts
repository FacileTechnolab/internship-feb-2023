import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getData()
  {
    // return {
    //   name:'peter',
    //   age:16,
    //   id:100
    // }
    let url= "https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url);
  }
}
