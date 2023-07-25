import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statcountbox',
  templateUrl: './statcountbox.component.html',
  styleUrls: ['./statcountbox.component.css']
})
export class StatcountboxComponent implements OnInit {
  url: string = "/assets/json/counter.json" ;
  @Input() countervalue: any;
  constructor() { }

  ngOnInit() {
  }

}
