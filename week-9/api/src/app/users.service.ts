import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { dataType } from './users'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getData() {
    let url = "https://jsonplaceholder.typicode.com/todos";
    // let url = "http://localhost:3000/janhvi";
    return this.http.get(url);
  }
  getinfo() {
    const info: dataType = {
      name: 'jahanvi',
      id: 10,
      indian: true,
    }
    return info;
  }
}
