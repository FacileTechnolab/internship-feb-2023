import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  url: string ="assets/json/bread.json"
  crumb : any
  constructor( private http: HttpClient) { }

  ngOnInit() {

    this.http.get(this.url).subscribe(res=> {
      this.crumb=res
    })
  }

}