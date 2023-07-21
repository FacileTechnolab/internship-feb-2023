import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Blog',
  templateUrl: './Blog.component.html',
  styleUrls: ['./Blog.component.css']
})
export class BlogComponent implements OnInit {
  url: string = "/assets/json/blogcategory.json";

  constructor(private http: HttpClient) { }
  blog: any;

  ngOnInit() {
    this.http.get(this.url).subscribe(result => {
      this.blog = result;

      console.log(this.blog);

    });

  }
}
