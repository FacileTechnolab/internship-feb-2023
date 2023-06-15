import { Component } from '@angular/core';


export interface dataType{
  name: string,
  id: number,
  indian: boolean,
  address : any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularmodel';
  getData(){
    const data ={
      name : 'anil',
      id: 10,
      indian: true,
      address : "Delhi, india"


    }
    return data;
  }

}
