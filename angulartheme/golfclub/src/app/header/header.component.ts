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
    document.getElementById("section_1")?.scrollIntoView({behavior: "smooth"});
     }
     toAbout(){
      document.getElementById("section_2")?.scrollIntoView({behavior: "smooth"});
    
     }
     toMembership(){
      document.getElementById("section_3")?.scrollIntoView({behavior: "smooth"});
    
     }
     toEvents(){
      document.getElementById("section_4")?.scrollIntoView({behavior: "smooth"});
    
     } 
     toContact(){
      document.getElementById("section_5")?.scrollIntoView({behavior: "smooth"});
    
     } 

}
