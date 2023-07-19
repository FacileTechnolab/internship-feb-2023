import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Ourproducts',
  templateUrl: './Ourproducts.component.html',
  styleUrls: ['./Ourproducts.component.css']
})
export class OurproductsComponent implements OnInit {
  url: string = "/assets/josn/product.json"
  our:any
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.our =result
    });
 console.log(this.our)
  }
}
