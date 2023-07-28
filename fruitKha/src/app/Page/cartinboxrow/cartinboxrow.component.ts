import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartinboxrow',
  templateUrl: './cartinboxrow.component.html',
  styleUrls: ['./cartinboxrow.component.css']
})
export class CartinboxrowComponent implements OnInit {
url: string ="assets/json/cartinboxrow.json"
@Input () row: any
  constructor() { }

  ngOnInit() {
  }

}
