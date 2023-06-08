import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';
  message = 'Angular is the best javascript framework for building for alient-side application';
  myName = "kela kela kela.....";
  getName(name:any)
  {
    alert(name)
  }
  myEvent(evt:any){
    console.warn(evt)
  }
  currentVal = "";
  getVal($event:any){
     console.warn($event.target.value)
     this.currentVal = $event.target.value
  }
  show = "green";
  color = "chocolate";
  data = [
    {
      name:'Krishi',
      age: 20,
      standard: 9
    },
    {
      name:'Dipi',
      age: 21,
      standard: 10
    },
    {
      name:'Jani',
      age: 22,
      standard: 12
    },
    {
      name:'Shivi',
      age: 22,
      standard: 12
    }]
}
