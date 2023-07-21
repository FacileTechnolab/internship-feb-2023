import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Shop',
  templateUrl: './Shop.component.html',
  styleUrls: ['./Shop.component.css']
})
export class ShopComponent implements OnInit {
shop:any;
url:string="assets/jsondata/innershop.json"
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res=>{
      this.shop=res;
    });
  }

}
