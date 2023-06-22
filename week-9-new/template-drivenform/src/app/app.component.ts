import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-drivenform';
onSubmit(Data:any)
{
  console.warn(Data)
}
userData={
  phone:"1598647236",
  birthdate:"1/1/2000"

}



}
