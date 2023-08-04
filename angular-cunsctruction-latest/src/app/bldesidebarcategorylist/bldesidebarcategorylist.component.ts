import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bldesidebarcategorylist',
  templateUrl: './bldesidebarcategorylist.component.html',
  styleUrls: ['./bldesidebarcategorylist.component.css']
})
export class BldesidebarcategorylistComponent implements OnInit {
   url1:string= "/assets/json/blogsidbarcategorylist.json"
   @Input () sidebar: any;
  constructor() { }

  ngOnInit() {
  }

}
