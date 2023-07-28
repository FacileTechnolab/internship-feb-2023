import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartin',
  templateUrl: './cartin.component.html',
  styleUrls: ['./cartin.component.css']
})
export class CartinComponent implements OnInit {
  url: string ="assets/json/cartinboxrow.json"
  boxrow :any

  constructor(private http:HttpClient) { }

  ngOnInit() {
     this.http.get(this.url).subscribe(res =>{this.boxrow = res; console.log(this.boxrow);} )
  }

}
