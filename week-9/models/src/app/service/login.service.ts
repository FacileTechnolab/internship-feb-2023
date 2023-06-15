import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  data(){
    return {
      name:"jahanvi",
      age:22,
      location:"ahemdabad"


    }
  }

}
