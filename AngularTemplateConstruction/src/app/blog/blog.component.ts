import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  isdisplay= true;
  title: string
  brList: any
  constructor() {
    this.title = "Blog"
    this.brList = [
      {
        title: 'Blog',
        url: "/blog",
        active: true
      }
    ]
   
 
  }

  ngOnInit() {
   
  }

}
