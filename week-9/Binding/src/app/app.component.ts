import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binding';
  book:any={
    Athorname:"Adamsmith",
    bookname:"computer fundamentals",
    rupees:100
  }
  
  imageSource:string="../assets/images/first.png";
}
