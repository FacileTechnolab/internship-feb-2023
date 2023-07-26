
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css']
})
export class ContactComponent implements OnInit {
url: string="assets/json/form.json"
data: any;
loginForm = new FormGroup({
    name : new FormControl ('',[Validators.required]),
    emailid :  new FormControl ('',[Validators.required]),
    PhoneNo :  new FormControl ('',[Validators.required])
})

  constructor() { }

  ngOnInit() {
  }
  onSubmit(value:NgForm) {
    console.log("formdata",value);
    alert("success");
 }
  get name()
  {
     return this.loginForm.get('name');
  }

}
