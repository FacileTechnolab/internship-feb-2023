import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  url: string= "/assets/json/blogdetailartical.json"
  url1:string= "/assets/json/breadcrumbs.json"
  breaddata: any;

  constructor(private http: HttpClient, private activatedRouter: ActivatedRoute) {
   
   }

  ngOnInit() {
    this.http.get(this.url1).subscribe(result=>{
       
      this.breaddata =result
   });
console.log(this.breaddata)
  }

}
