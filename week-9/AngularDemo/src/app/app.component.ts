import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  // color = "chocolate";
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

    //tdf
      // name : any;
      // email: any;
      // password: any;
      // messagetext : any ; 
      // submitForm(){
      //   alert(`${this.name} ${this.email} ${this.messagetext}`)
      // }

    //react-form
    //create a form control for the username
    nameControl = new FormControl('');
    emailControl = new FormControl('');
    messagetextControl = new FormControl('');


    //create a form control for the username
   form = new FormGroup({
      name: this.nameControl,
      email : this.emailControl,
      mesagetext : this.messagetextControl
    });
    
    submitForm(){
      alert(this.nameControl.value)
    }
 

    color = "yellow";
    err = true;
    Updatecolor(){
      // this.color = "blue";
      this.err= !this.err
    }
}
