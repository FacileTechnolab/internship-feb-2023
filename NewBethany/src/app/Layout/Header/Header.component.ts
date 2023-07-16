import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toHome(){
    document.getElementById("hero")?.scrollIntoView({behavior: "smooth"});
     }
     About(){
      document.getElementById("about")?.scrollIntoView({behavior: "smooth"});
    
     }
     Services(){
      document.getElementById("services")?.scrollIntoView({behavior: "smooth"});
    
     }
     portfolio(){
      document.getElementById("portfolio")?.scrollIntoView({behavior: "smooth"});
    
     }
     Team(){
      document.getElementById("team")?.scrollIntoView({behavior: "smooth"});
    
     }
     
     Contact(){
      document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
    
     }

}
