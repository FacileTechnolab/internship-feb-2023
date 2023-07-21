import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Static-home',
  templateUrl: './Static-home.component.html',
  styleUrls: ['./Static-home.component.css']
})
export class StaticHomeComponent implements OnInit {
  subtitle='Fresh & Organic';
  title='Delicious Seasonal Fruits';
  btn1='Fruit Collection';
  btn2='Contact Us';

  constructor() { }

  ngOnInit() {
  }

}
