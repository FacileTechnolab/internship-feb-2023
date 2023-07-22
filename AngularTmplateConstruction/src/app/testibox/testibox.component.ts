import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testibox',
  templateUrl: './testibox.component.html',
  styleUrls: ['./testibox.component.css']
})
export class TestiboxComponent implements OnInit {
  url: string= "/assets/json/testimonial.json"
  @Input() testibox : any;
  constructor() { }

  ngOnInit() {
  }

}
