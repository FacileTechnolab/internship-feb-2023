import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators}from '@angular/forms'  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  LoginForm=new FormGroup
  ({
    email: new FormControl('',[Validators.required, Validators.email]),
    address: new FormControl('',[Validators.required,Validators.minLength (3)]),
    password: new FormControl(''),
  });
  get email(){return this.LoginForm.get('email')}
  get address(){return this.LoginForm.get('address')}

  collectData()
  {
    console.warn(this.LoginForm.value );
  }
}
