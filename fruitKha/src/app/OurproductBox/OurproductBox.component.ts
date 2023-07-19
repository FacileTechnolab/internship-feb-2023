import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-OurproductBox',
  templateUrl: './OurproductBox.component.html',
  styleUrls: ['./OurproductBox.component.css']
})
export class OurproductBoxComponent implements OnInit {
  url: string = "/assets/josn/product.json"
 @Input () pro :any

  constructor() { }

  ngOnInit() {
  }

}
