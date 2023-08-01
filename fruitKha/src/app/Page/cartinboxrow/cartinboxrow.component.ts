import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

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

constructor(private http:HttpClient) { }

ngOnInit() {
  this.http.get(this.url1).subscribe(res =>{this.rowdes = res; console.log(this.rowdes);} )
  this.http.get(this.url).subscribe(res =>{this.row = res;} )
  
}
oncart(){
  document.getElementById("cart")?.scrollIntoView({behavior: 'smooth'})
}
}
