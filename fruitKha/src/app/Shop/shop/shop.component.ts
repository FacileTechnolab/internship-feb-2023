import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  url: string ="assets/json/bread.json"
  
  crumb: any
  constructor(private http: HttpClient) { }

  ngOnInit() {
this.http.get(this.url).subscribe(res => {this.crumb = res})

  }

}
