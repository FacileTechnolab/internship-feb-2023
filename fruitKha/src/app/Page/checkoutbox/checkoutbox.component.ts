import { CheckoutComponent } from './../checkout/checkout.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkoutbox',
  templateUrl: './checkoutbox.component.html',
  styleUrls: ['./checkoutbox.component.css']
})
export class CheckoutboxComponent implements OnInit {
  url: string ="assets/json/checkoutrightbox.json"
  url1 : string="assets/json/checkoutleftbox.json"
  checkout: any
  check:any
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res =>{this.checkout = res})
    this.http.get(this.url1).subscribe(res =>{this.check = res})
  }

}
