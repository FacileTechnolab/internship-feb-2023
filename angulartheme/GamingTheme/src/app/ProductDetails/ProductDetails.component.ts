import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface Image{
  id:string;
    src: string;
    title: string;
    price1:string;
    price2:string; 
    pragraph:string; 
    icon:string;
    label:string; 
    label1:string;
    label2:string;
    label3:string;
    label4:string;
    label5: string;
    label6:string;
    label7: string;
    label8:string;
}
@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
detail:any;
id:any;
obj1:any;
categories:any;
apex:any;
data:any;
url3:string="/assets/jsondata/innercontact.json"
 tabs:string[]=[' Description',' Reviews '];
 url1:string="/assets/jsondata/breadcrum.json";
url2:string="/assets/jsondata/categories.json"
url:string="/assets/jsondata/detailspage.json"
  constructor(private http:HttpClient, private route: ActivatedRoute) { }
activatedTabIndex:number=0;
  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.obj1=result;
    })
    this.http.get(this.url3).subscribe(result=>{
      this.detail=result;
  
    })
    this.http.get(this.url2).subscribe(result=>{
      this.apex=result;
    })
    this.http.get(this.url1).subscribe(result=>{
      this.data=result;
     
    })
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id", this.id);
    console.log("data", this.route.snapshot.paramMap.get('id'));

  }

  tabChange(tabIndex:number){
 this.activatedTabIndex=tabIndex;
  }


}
