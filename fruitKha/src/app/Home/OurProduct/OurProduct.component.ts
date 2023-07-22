import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OurProduct',
  templateUrl: './OurProduct.component.html',
  styleUrls: ['./OurProduct.component.css']
})
export class OurProductComponent implements OnInit {
  url: string= "assets/json/Ourproduct.json"
 our:any
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get(this.url). subscribe(res => {this.our = res; console.log(this.our);}) 
  }

}
