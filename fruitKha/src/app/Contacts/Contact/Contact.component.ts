
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
    emailid :  new FormControl ('',[Validators.required, Validators.email]),
    phoneno :  new FormControl ('',[Validators.required])
})

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.warn(this.loginForm.value);
  }
  get name()
  {
     return this.loginForm.get('name');
  }
  get emailid()
  {
     return this.loginForm.get('emailid');
  }
  get phoneno()
  {
     return this.loginForm.get('phoneno');
  }

}
