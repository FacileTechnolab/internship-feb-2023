import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footermenu',
  templateUrl: './footermenu.component.html',
  styleUrls: ['./footermenu.component.css']
})
export class FootermenuComponent implements OnInit {
url:string="/assets/json/footermenu.json";
@Input () footermenudata:any;
  constructor() { }

  ngOnInit() {
  }

}
