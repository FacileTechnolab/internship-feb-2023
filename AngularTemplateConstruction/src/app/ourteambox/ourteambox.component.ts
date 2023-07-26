import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourteambox',
  templateUrl: './ourteambox.component.html',
  styleUrls: ['./ourteambox.component.css']
})
export class OurteamboxComponent implements OnInit {
url: string = "/assets/json/ourteam.json";
@Input() ourteambox : any;
  constructor() { }

  ngOnInit() {
  }
  onclickabout(){
    document.getElementById("main")?.scrollIntoView({behavior: "smooth"});
     }
}
