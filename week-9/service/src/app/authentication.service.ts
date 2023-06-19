import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  getdata() {
    return {
      name: 'xys',
      age: 35,
      id: 1001
    }
  }
}
