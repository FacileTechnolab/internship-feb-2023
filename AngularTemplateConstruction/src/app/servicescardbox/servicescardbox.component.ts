import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicescardbox',
  templateUrl: './servicescardbox.component.html',
  styleUrls: ['./servicescardbox.component.css']
})
export class ServicescardboxComponent implements OnInit {
  url: string = "/assets/json/servicescard.json";
  @Input() sercardvalue: any;
  constructor() { }

  ngOnInit() {
  }

}
