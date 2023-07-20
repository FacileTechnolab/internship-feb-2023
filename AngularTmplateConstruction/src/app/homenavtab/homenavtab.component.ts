import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homenavtab',
  templateUrl: './homenavtab.component.html',
  styleUrls: ['./homenavtab.component.css']
})
export class HomenavtabComponent implements OnInit {
  url: string = "/assets/json/tab.json" ;
  @Input() tabtext: any;
  activatedTab: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
