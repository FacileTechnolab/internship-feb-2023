import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopboxdata',
  templateUrl: './shopboxdata.component.html',
  styleUrls: ['./shopboxdata.component.css']
})
export class ShopboxdataComponent implements OnInit {
@Input () shopdata:any
url: string="assets/json/shopbox.json"
  constructor() { }

  ngOnInit() {
  }

}
