import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-altservicebox',
  templateUrl: './altservicebox.component.html',
  styleUrls: ['./altservicebox.component.css']
})
export class AltserviceboxComponent implements OnInit {
  url: string = "/assets/json/altservices.json" ;
  @Input() altserbox: any;
  constructor() { }

  ngOnInit() {
  }

}
