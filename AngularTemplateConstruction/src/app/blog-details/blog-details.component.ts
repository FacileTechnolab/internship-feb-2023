import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  url: string= "/assets/json/blogdetailartical.json"


  title: string
  brList: any
  constructor(private http: HttpClient) {
    this.title = "Blog Details"
    this.brList = [
      {
        title: 'Blog Details',
        url: "/blog-details",
        active: true
      }
    ]
   }

  ngOnInit() {

  }

}
