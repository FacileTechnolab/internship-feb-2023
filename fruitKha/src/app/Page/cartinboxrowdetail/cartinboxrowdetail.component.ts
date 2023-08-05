import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './../../service/cart.service';

@Component({
  selector: 'app-cartinboxrowdetail',
  templateUrl: './cartinboxrowdetail.component.html',
  styleUrls: ['./cartinboxrowdetail.component.css']
})
export class CartinboxrowdetailComponent implements OnInit {
@Input () rowde:any
url :string ="assets/json/cartindetain.json"

// public shop: any =[];
// public grandtotal !:number;
  
constructor(private CartService : CartService) { }

  ngOnInit() {   
    // this.CartService.getShop().subscribe(res =>{this.shop = res; this.grandtotal = this.CartService.getTotalPrice()})
  }
  
  getcartdetail:any=[];
  Cartdetails(){
    if(localStorage.getItem('localcart')){
      this.getcartdetail = JSON.parse( localStorage.getItem('localcart'));
      console.log(this.getcartdetail);
    }
  }

  removeitem(rowde:any){    
    this.CartService.removecartItem(rowde);
  }
  emptycart(){  
      this.CartService.removeAllCart();
  }
}
