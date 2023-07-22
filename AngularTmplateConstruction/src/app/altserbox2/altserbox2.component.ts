import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-altserbox2',
  templateUrl: './altserbox2.component.html',
  styleUrls: ['./altserbox2.component.css']
})
export class Altserbox2Component implements OnInit {
  url: string = "/assets/json/altser2.json"

@Input() altser2box: any;
  constructor() { }

  ngOnInit() {
  }

}
