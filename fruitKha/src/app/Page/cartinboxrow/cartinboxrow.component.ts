import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from './../../service/cart.service';

@Component({
  selector: 'app-cartinboxrow',
  templateUrl: './cartinboxrow.component.html',
  styleUrls: ['./cartinboxrow.component.css']
})
export class CartinboxrowComponent implements OnInit {
url: string ="assets/json/cartinboxrow.json"
url1 :string ="assets/json/cartindetain.json"
 rowdes: any
row:any

public shop: any =[];
public grandtotal !:number;
constructor(private http:HttpClient, private CartService : CartService) { }

ngOnInit() {
  this.http.get(this.url1).subscribe(res =>{this.rowdes = res; console.log(this.rowdes);} )
  this.http.get(this.url).subscribe(res =>{this.row = res;} )

  this.CartService.getShop().subscribe(res =>{this.shop = res; this.grandtotal = this.CartService.getTotalPrice()})
  
}
removeitem(rowde:any){
  // document.getElementById("cart")?.scrollIntoView({behavior: 'smooth'})
  this.CartService.removecartItem(rowde);
}
emptycart(){
  this.CartService.removecartItem
}
}
