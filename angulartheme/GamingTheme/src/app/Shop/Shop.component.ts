import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';
interface Image{
  category: string;
  category1:string
  routerLink:string;
  src:string;
  price1:string;
  price2:string;
   label:string;
  label2:string;
  icon:string;
}

@Component({
  selector: 'app-Shop',
  templateUrl: './Shop.component.html',
  styleUrls: ['./Shop.component.css']
})
export class ShopComponent implements OnInit {
  home:any;
  totalLength:any;
  page:number=1;
  total:any;
Images:Image[]=[];
filteredImages:Image[]=this.Images;
data:any;
data1:any;
url2:string="assets/jsondata/home.json"
url1:string="assets/jsondata/breadcrum.json";
url:string="assets/jsondata/innershop.json"
  constructor(private http:HttpClient) { }


  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
    
      this.data=result;
      
  this.Images=this.data;
  this.filteredImages=this.Images;
    

     
    })
    this.http.get(this.url1).subscribe(result=>{
      this.data1=result;
     
    });
    this.http.get(this.url2).subscribe(result=>{
      this.home=result;
     
    });
  }
 
  filterImages(category:string):void{
   if(category ==='all'){
     this.filteredImages=this.Images;
   }
   else{
     this.filteredImages=this.Images.filter(Image=>Image.category ===category ||Image.category1 ===category );
   }

}
}

