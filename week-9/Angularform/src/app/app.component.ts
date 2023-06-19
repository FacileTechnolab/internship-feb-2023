import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularform';
  // template-form
  onSubmit(data:any)
  {
    console.warn("form data", data);
  }
  userData = {
    useremail : "dipali@gmail.com",
    password: "dipali@123",
    address : "noida"
  }
  
  // reactive-form
    loginForm = new FormGroup ({
      email1: new FormControl('',[Validators.required, Validators.email] ),
      password1: new FormControl('',Validators.required),
      // address1 : new FormControl('',[Validators.required, Validators.minLength(3)])
      address1 : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*')])

  })
  collectData(){
    console.warn(this.loginForm.value);
    
  }
  get email1(){
     return this.loginForm.get('email1');
  }
  get password1(){
    return this.loginForm.get('password1');
 }
 get address1(){
  return this.loginForm.get('password1');
}
onSubmitlogin(){
  console.warn(this.loginForm.value)
}
}
