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

  // myEvent(evt)
  // {
  //   console.warn(evt)
  // }
  }
}
