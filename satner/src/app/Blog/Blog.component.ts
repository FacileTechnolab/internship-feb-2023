import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Blog',
  templateUrl: './Blog.component.html',
  styleUrls: ['./Blog.component.css']
})
export class BlogComponent implements OnInit {
  url: string = "/assets/json/blogcategory.json";
  url1: string = "assets/json/breadcrumb.json";
  link2: string = "/assets/json/blogimage.json";
  blogId: any;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  blog: any;
  Fruit: any;
  data: any;
  data2: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(result => {
      this.blog = result;

      // console.log(this.blog);

    });
    this.http.get(this.url1).subscribe(rel1 => {
      this.Fruit = rel1;
      //console.log(this.Fruit);

    });
    this.http.get(this.link2).subscribe(rel2 => {
      this.data = rel2;
      //console.log(this.Fruit);
      this.data2 = this.data.find((x: any) => x.id == this.blogId);

    });
    this.blogId = this.activatedRoute.snapshot.paramMap.get('id');

  }
}

