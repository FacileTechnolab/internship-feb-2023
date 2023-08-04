import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projedetasliderimg',
  templateUrl: './projedetasliderimg.component.html',
  styleUrls: ['./projedetasliderimg.component.css']
})
export class ProjedetasliderimgComponent implements OnInit {
  url: string= "/assets/json/projectdetailslider.json"
  @Input() sliderimg: any;
  constructor() { }

  ngOnInit() {
  }

}
