import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
details:any;
categories:any;
crockery:any;
data:any;
 tabs:string[]=[' Description',' Reviews (3)'];
 url1:string="assets/jsondata/breadcrum.json";
url2:string="assets/jsondata/categories.json"
url:string="assets/jsondata/detailspage.json"
  constructor(private http:HttpClient) { }
activatedTabIndex:number=0;
  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.details=result;
    })
    this.http.get(this.url2).subscribe(result=>{
      this.crockery=result;
    })
    this.http.get(this.url1).subscribe(result=>{
      this.data=result;
     
    })
  
  }
  tabChange(tabIndex:number){
 this.activatedTabIndex=tabIndex;
  }

}
