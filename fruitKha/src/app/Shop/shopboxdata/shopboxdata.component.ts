import { CartService } from './../../service/cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopboxdata',
  templateUrl: './shopboxdata.component.html',
  styleUrls: ['./shopboxdata.component.css']
})
export class ShopboxdataComponent implements OnInit {
url: string="assets/json/shopbox.json"
@Input () shopdata:any
data:any

// public shopItemList: any

constructor( private CartService : CartService) { }

ngOnInit(): void {   }

  itemsCart:any

  addtocart(shopdata:any){
   console.log("string",shopdata);   
   let cartDataNull = localStorage.getItem('localcart');
   if(cartDataNull == null){
    let storeDataGet:any = [];
    storeDataGet.push(shopdata);
    localStorage.setItem('localcart', JSON.stringify(storeDataGet));
   }
   else{
    var id = shopdata.productdetailid;
    let index :number = -1;
    this.itemsCart= JSON.parse(localStorage.getItem('localcart')) ;
  }
     localStorage.setItem('localcart', JSON.stringify(shopdata));

 }
} 
