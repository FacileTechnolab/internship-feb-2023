import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Shop',
  templateUrl: './Shop.component.html',
  styleUrls: ['./Shop.component.css']
})
export class ShopComponent implements OnInit {
shop:any;
list:any;
url:string="assets/jsondata/innershop.json"
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res=>{
      this.shop=res;
      this.list = this.shop;
      console.log('icon', this.shop)
    });
  }
  onadv() {

    this.list = this.shop.filter((x: any) => x.type == "adv")
    console.log("adv",this.list);
  }
  onstr() {

    this.list = this.shop.filter((x: any) => x.type == "str")
    console.log("str",this.list);
  }
  // onevent() {

  //   this.list = this.shop.filter((x: any) => x.type == "popular")
  // }
  // onevent() {

  //   this.list = this.shop.filter((x: any) => x.type == "popular")
  // }
}
