import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homesericesbox',
  templateUrl: './homesericesbox.component.html',
  styleUrls: ['./homesericesbox.component.css']
})
export class HomesericesboxComponent implements OnInit {
  url: string = "/assets/json/homeservices.json" ;
  @Input() serbox: any;
  constructor() { }

  ngOnInit() {
  }

}
