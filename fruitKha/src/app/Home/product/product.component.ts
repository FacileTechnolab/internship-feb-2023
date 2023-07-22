import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
url: string="assets/json/Product.json"
product:any
  constructor(private http: HttpClient) {}

  ngOnInit()
  {this.http.get(this.url).subscribe(result=>{this.product =result});
  
}
}
