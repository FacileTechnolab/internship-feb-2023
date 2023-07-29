import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  url: string = "/assets/json/homeblogpost.json" ;
  homeblogdata: any;
  isdisplay:boolean;
  showHome: boolean;
  title: string
  brList: any
  constructor(private http:HttpClient) {
    this.title = "Blog"
    this.brList = [
      {
        title: 'Blog',
        url: "/blog",
        active: true
      }
    ]
    console.log("blog",this.isdisplay)
 
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.homeblogdata =result
    });
    console.log(this.homeblogdata)
  }

}
