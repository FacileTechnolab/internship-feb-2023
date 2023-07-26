import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  title: string
  brList: any
  constructor() {
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
