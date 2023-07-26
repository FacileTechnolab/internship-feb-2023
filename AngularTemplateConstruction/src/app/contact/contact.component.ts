import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactform= new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    email: new FormControl('', [Validators.required ,Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),

  })
  collectData(){
    console.log(this.contactform.value)
  }
  get name(){
    return this.contactform.get('name')
  }
  get email(){
    return this.contactform.get('email')
  }
  get subject(){
    return this.contactform.get('subject')
  }
  get message(){
    return this.contactform.get('message')
  }


  title: string
  brList: any
  constructor() {
    this.title = "Contact"
    this.brList = [
      {
        title: 'Contact',
        url: "/contact",
        active: true
      }
    ]
   }

  ngOnInit() {
  }
 

  
}
