import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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
}
