import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world';
  name= 'Maurya';
  obj= {
    name:'krishika',
    age:21
  }
  arr=['bruce','tony','peter']

  getName() {
    alert("It's me")
  }
  myEvent(evt:any)
  {
    console.warn(evt);
  }
  currentVal="";
  getValue(val:any)
  {
    
    console.warn(val);
    this.currentVal=val;
  }


  }


