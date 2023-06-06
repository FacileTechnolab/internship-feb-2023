import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic_app';
  name="Jahanvi"
  getname()
  {
    // return "Virat"
    return this.name
  }
  obj={
    name:"Anushka",
    age:20
  }
  arr=["Dhoni","Virat","Jadeja","Rahul"];
  siteUrl=window.location.href;
  getNAME(name2:any){
    alert(name2)
  }

}
 