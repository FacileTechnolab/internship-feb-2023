import { Component } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'form';
  onSubmit(data:any) {
    console.warn(data);

    }
    loginFrom=new FormGroup({
      username:new FormControl(''),
      userpassword:new FormControl('')
    })
    collectData(){
      console.warn(this.loginFrom.value );
      
    }

    
}
