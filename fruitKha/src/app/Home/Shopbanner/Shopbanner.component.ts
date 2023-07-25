import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Shopbanner',
  templateUrl: './Shopbanner.component.html',
  styleUrls: ['./Shopbanner.component.css']
})
export class ShopbannerComponent implements OnInit {
url: string= "/assets/json/shopbanner.json"
shop: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res =>{this.shop = res;  console.log(this.shop);} )
  }

}
