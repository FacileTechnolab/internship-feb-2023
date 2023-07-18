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
    document.getElementById("hero")?.scrollIntoView({behavior: "smooth"});
     }
     toAbout(){
      document.getElementById("about")?.scrollIntoView({behavior: "smooth"});
    
     }
     toMenu(){
      document.getElementById("menu")?.scrollIntoView({behavior: "smooth"});
    
     }
     toEvents(){
      document.getElementById("events")?.scrollIntoView({behavior: "smooth"});
    
     }
     toChefs(){
      document.getElementById("chefs")?.scrollIntoView({behavior: "smooth"});
    
     }
     toGallery(){
      document.getElementById("events")?.scrollIntoView({behavior: "smooth"});
    
     }
     toContact(){
      document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
    
     }
     tobooktable()
     {
      document.getElementById("book-a-table")?.scrollIntoView({behavior: "smooth"});
     }
}
