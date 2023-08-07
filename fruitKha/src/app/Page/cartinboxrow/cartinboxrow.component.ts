import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cartinboxrow',
  templateUrl: './cartinboxrow.component.html',
  styleUrls: ['./cartinboxrow.component.css']
})
export class CartinboxrowComponent implements OnInit {
url: string ="/assets/json/cartinboxrow.json"

url1 :string ="/assets/json/cartindetain.json"

data:any;
row:any


constructor(private http:HttpClient) { }

ngOnInit() {

  this.http.get(this.url).subscribe(res => {this.row = res });
  console.log(this.row);
}

}











// public shop: any =[];
// public grandtotal !:number;