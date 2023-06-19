import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'form';

  onSubmit(data: any) {
    console.warn(data);
  }
  loginform = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      password: new FormControl('', Validators.required)

    }
  )
  get email() {
    return this.loginform.get('email');
  }
  get address() {
    return this.loginform.get('address');
  }


  onLogin() {
    console.warn(this.loginform.value);
  }


  login = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  collectData() {
    console.warn(this.login.value);
  }
}
