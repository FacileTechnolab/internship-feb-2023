import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  url: string = "/assets/json/homeblogpost.json" ;
  url1:string= "/assets/json/breadcrumbs.json"
  breaddata: any;
  homeblogdata: any;
  isdisplay:boolean;
  showHome: boolean;
 
  totalLength:any;
  page:number=1;
  total:any;
  // p: number = 1;
  // collection:any[] = [];
  // itemsperPage:number = 5;
  // totalPost:any;
  
 
  constructor(private http:HttpClient) {
   
    console.log("blog",this.isdisplay)
 
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.homeblogdata =result
    });
    console.log(this.homeblogdata)

    this.http.get(this.url1).subscribe(result=>{
       
      this.breaddata =result
   });
console.log(this.breaddata)
  }
  onblog(){
    document.getElementById("main")?.scrollIntoView({behavior: "smooth"});
  }

}
