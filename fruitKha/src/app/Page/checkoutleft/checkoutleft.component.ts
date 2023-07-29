import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkoutleft',
  templateUrl: './checkoutleft.component.html',
  styleUrls: ['./checkoutleft.component.css']
})
export class CheckoutleftComponent implements OnInit {
url : string="assets/json/checkoutleftbox.json"
@Input () left :any

checkoutForm = new FormGroup({
  name : new FormControl ('',[Validators.required]),
  emailid :  new FormControl ('',[Validators.required, Validators.email]),
  phoneno :  new FormControl ('',[Validators.required]) 
})
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.warn(this.checkoutForm.value);
  }
  get name()
  {
     return this.checkoutForm.get('name');
  }
  get emailid()
  {
     return this.checkoutForm.get('emailid');
  }
  get phoneno()
  {
     return this.checkoutForm.get('phoneno');
  }

}
