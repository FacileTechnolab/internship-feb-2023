import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headermenulist',
  templateUrl: './headermenulist.component.html',
  styleUrls: ['./headermenulist.component.css']
})
export class HeadermenulistComponent implements OnInit {
url:string="/assets/json/headermenu.json"
@Input () headermenudata: any;
  constructor() { }

  ngOnInit() {
  }

}
