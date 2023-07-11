import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior: "smooth"});
     }
     toAbout(){
      document.getElementById("about")?.scrollIntoView({});
    
     }
     toMenu(){
      document.getElementById("menu")?.scrollIntoView({});
    
     }
     toEvents(){
      document.getElementById("events")?.scrollIntoView({});
    
     }
     toChefs(){
      document.getElementById("chefs")?.scrollIntoView({});
    
     }
     toGallery(){
      document.getElementById("events")?.scrollIntoView({});
    
     }
     toContact(){
      document.getElementById("contact")?.scrollIntoView({});
    
     }
}
