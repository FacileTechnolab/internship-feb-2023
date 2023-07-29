import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isdisplay:boolean;
  constructor() {
   
    console.log("home",this.isdisplay)
   }

  ngOnInit() {
  }
  getstarted(){
    document.getElementById("get-started")?.scrollIntoView({behavior: "smooth"});
  }

  qutform= new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    email: new FormControl('', [Validators.required ,Validators.email]),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),

  })
  collectData(){
    console.log(this.qutform.value)
  }
  get name(){
    return this.qutform.get('name')
  }
  get email(){
    return this.qutform.get('email')
  }
  get phone(){
    return this.qutform.get('phone')
  }
  get message(){
    return this.qutform.get('message')
  }
}
