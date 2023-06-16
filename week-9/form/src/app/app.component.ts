import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'form';

  onSubmit(data: any) {
    console.warn(data);

    login = new FormGroup(
      {
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)

      }
    )



  }
  loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  collectData() {
    console.warn(this.loginform.value);
  }
}
