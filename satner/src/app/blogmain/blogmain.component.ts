import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blogmain',
  templateUrl: './blogmain.component.html',
  styleUrls: ['./blogmain.component.css']
})
export class BlogmainComponent implements OnInit {
  url: string = "/assets/json/blogright.json"
  constructor(private http: HttpClient) { }
  url1: string = "/assets/json/blogarea.json";
  link: string = "/assets/json/news.json";
  blogarea: any;
  blogpost: any;
  news: any;
  ngOnInit() {

    this.http.get(this.url1).subscribe(rel => {
      this.blogarea = rel;

      console.log(this.blogarea);

    });
    this.http.get(this.url).subscribe(rel1 => {
      this.blogpost = rel1;

      console.log(this.blogpost);

    });
    this.http.get(this.link).subscribe(rel2 => {
      this.news = rel2;

      console.log(this.news);

    });


  }
}
