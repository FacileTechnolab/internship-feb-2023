import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
url: string="assets/josn/Product.json"
Deal: any
@Input () product:any
  constructor(private http: HttpClient) {}

  ngOnInit(){this.http.get(this.url).subscribe(result=>{this.product =result});
  console.log(this.product)
}
}
