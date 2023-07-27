import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Blog',
  templateUrl: './Blog.component.html',
  styleUrls: ['./Blog.component.css']
})
export class BlogComponent implements OnInit {
  url: string = "/assets/json/blogcategory.json";
  url1: string = "assets/json/breadcrumb.json";
  constructor(private http: HttpClient) { }
  blog: any;
  Fruit: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(result => {
      this.blog = result;

      console.log(this.blog);

    });
    this.http.get(this.url1).subscribe(rel1 => {
      this.Fruit = rel1;
      console.log(this.Fruit);

    });

  }
}

