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
  url2:string = "/assets/json/blogdetails.json"
  breaddata: any;

  blogdetaildata: any;
   blogdetails;
  blogdetailId;

  constructor(private http: HttpClient, private activatedRouter: ActivatedRoute) {
   
   }

  ngOnInit() {
    this.http.get(this.url1).subscribe(result=>{
       
      this.breaddata =result
   });
console.log(this.breaddata)

this.http.get(this.url2).subscribe(result=>{
       
  this.blogdetaildata =result
});
console.log(this.blogdetaildata)



this.blogdetailId=this.activatedRouter.snapshot.paramMap.get('id');

this.blogdetails=this.blogdetaildata.find(x => x.id == this.blogdetailId);
  }
  

}
