import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-Blogdetails',
  templateUrl: './Blogdetails.component.html',
  styleUrls: ['./Blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  url: string = "/assets/json/blogright.json";
  link: string = "/assets/json/news.json";
  news: any;
  url2: string = "/assets/json/content.json";
  Leave = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    sub: new FormControl('', [Validators.required]),
    msg: new FormControl('')
  })
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
  onLeave() {
    console.warn(this.Leave.value);
  }
  get name() {
    return this.Leave.get('name');

  }
  get sub() {
    return this.Leave.get('sub');

  }
  get email() {
    return this.Leave.get('email');

  }

}
