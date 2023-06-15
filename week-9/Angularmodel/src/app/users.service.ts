import { Injectable } from '@angular/core';
import {dataType} from './users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getData(){
    const data:dataType ={
      name : 'anil',
      id: 10,
      indian: true,
      address : "Delhi, india"


    }
    return data;
  }
}
