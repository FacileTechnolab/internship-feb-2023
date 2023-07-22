import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-OurproductBox',
  templateUrl: './OurproductBox.component.html',
  styleUrls: ['./OurproductBox.component.css']
})
export class OurproductBoxComponent implements OnInit {
  url: string= "assets/json/Ourproduct.json"
  @Input() ourproductbox : any;
  constructor() { }

  ngOnInit() {
  }

}
