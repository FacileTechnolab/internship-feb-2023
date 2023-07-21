import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tesibox',
  templateUrl: './tesibox.component.html',
  styleUrls: ['./tesibox.component.css']
})
export class TesiboxComponent implements OnInit {
  url: string = "/assets/json/testimonial.json" ;
  @Input() testibox: any;
  constructor() { }

  ngOnInit() {
  }

}
