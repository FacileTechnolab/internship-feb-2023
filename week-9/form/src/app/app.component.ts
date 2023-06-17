import { Component } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'form';
  // onSubmit(data:any) {
  //   console.warn(data);

  //   }
    // loginFrom=new FormGroup({
    //   username:new FormControl(''),
    //   userpassword:new FormControl('')
    // })
    // collectData(){
    //   console.warn(this.loginFrom.value );
      
    // }
    loginform= new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required)
    })

   get email(){
      return this.loginform.get('email');
    }
    get password(){
      return this.loginform.get('password');
    }

    
}
