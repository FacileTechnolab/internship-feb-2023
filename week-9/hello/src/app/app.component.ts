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
    this.currentVal=val
  }
   
  disabledBox=true
  enableBox()
  {
      this.disabledBox=false
  }
  
  // show="yes"
  show="red"
  color="Blue"
  
  data=
  [{
     name:'Mauryaji',
     age:21,
     marks:56
    },
    {
      name:'Maratha',
      age:22,
      marks:51
     },
     {
      name:'Patel',
      age:23,
      marks:74
     },
     {
      name:'Shahi',
      age:24,
      marks:75
     },
  ]

  getvalues(val:any)
  {
    console.warn(val) 
  }

  boja="orange";
  err=true;
  Updatecolor()
  {
    this.err = !this.err

  }
}


