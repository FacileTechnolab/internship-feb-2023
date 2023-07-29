import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statecounterbox',
  templateUrl: './statecounterbox.component.html',
  styleUrls: ['./statecounterbox.component.css']
})
export class StatecounterboxComponent implements OnInit {
  url: string = "/assets/json/counter.json" ;
  @Input() countervalue: any;
  constructor() { }

  ngOnInit() {
  }

}
