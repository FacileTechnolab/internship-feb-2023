import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-Blogdetails',
  templateUrl: './Blogdetails.component.html',
  styleUrls: ['./Blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  url: string = "/assets/json/blogright.json";
  link: string = "/assets/json/news.json";
  news: any;
  url2: string = "/assets/json/content.json"
  constructor(private http: HttpClient) { }
  blogpost: any;
  content: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(rel1 => {
      this.blogpost = rel1;

      console.log(this.blogpost);

    });
    this.http.get(this.link).subscribe(rel2 => {
      this.news = rel2;

      console.log(this.news);

    });
    this.http.get(this.url2).subscribe(rel3 => {
      this.content = rel3;

      console.log(this.content);

    });

  }
  onblogdertail() {
    document.getElementById("blogdetails")?.scrollIntoView({ behavior: "smooth" });

  }

}
