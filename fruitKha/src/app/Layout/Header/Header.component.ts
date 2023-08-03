import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem :number =0;
  constructor(private CartService : CartService) { }

  ngOnInit() {
     this.CartService.getShop().subscribe(res => {this.totalItem = res.length})
  }

 


}
