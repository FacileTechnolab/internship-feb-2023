import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-checkoutleft',
  templateUrl: './checkoutleft.component.html',
  styleUrls: ['./checkoutleft.component.css']
})
export class CheckoutleftComponent implements OnInit {
url : string="assets/json/checkoutleftbox.json"
@Input () left :any
  constructor() { }

  ngOnInit() {
  }

}
