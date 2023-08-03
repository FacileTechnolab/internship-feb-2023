import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   public cartItemList :any =[];
   public shopItemList = new BehaviorSubject<any>([]);

  constructor() { } 

  getShop(){
    return this.shopItemList.asObservable();
  }
  setShop(shop : any){
    this.cartItemList.push(shop);
    this.shopItemList.next(shop);
  }
 
  addtoCart(shop : any){
    debugger
    this.cartItemList.push(shop);
    this.shopItemList.next(this.cartItemList);
    this.getTotalPrice();
    debugger
    console.log("cart", this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0   ;
    this.cartItemList.map((a:any)=> {
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removecartItem(shop:any)
  {
    this.cartItemList.map((a:any, index:any)=>{
      if(shop.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
     this.shopItemList.next(this.cartItemList);
  }  
  removeAllCart(){
    this.cartItemList = []
    this.shopItemList.next(this.cartItemList);
  }

}
