import { CartService } from './../../service/cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopboxdata',
  templateUrl: './shopboxdata.component.html',
  styleUrls: ['./shopboxdata.component.css']
})
export class ShopboxdataComponent implements OnInit {
@Input () shopdata:any

public shopItemList: any

url: string="assets/json/shopbox.json"
  constructor( private CartService : CartService) { }

  ngOnInit(): void {

 
  }


  addtocart(shopdata:any){
    this.CartService.addtoCart(shopdata);
 }
 

} 
