import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bannerimg',
  templateUrl: './bannerimg.component.html',
  styleUrls: ['./bannerimg.component.css']
})
export class BannerimgComponent implements OnInit {
  url: string = "/assets/json/bannerslider.json" ;
  @Input() bannerimg: any;
  constructor() { }

  ngOnInit() {
  }

}
