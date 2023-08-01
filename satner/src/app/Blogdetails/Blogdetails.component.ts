import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-Blogdetails',
  templateUrl: './Blogdetails.component.html',
  styleUrls: ['./Blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  url: string = "/assets/json/blogright.json";
  link: string = "/assets/json/news.json";
  url3: string = "assets/json/breadcrumb.json";
  link2: string = "/assets/json/blogimage.json"
  news: any;
  blogId: any;
  blogdata: any;
  url2: string = "/assets/json/content.json";
  Leave = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    sub: new FormControl('', [Validators.required]),
    msg: new FormControl('')
  })
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  blogpost: any;
  Fruit: any;
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
    this.http.get(this.url3).subscribe(result => {
      this.Fruit = result;
      console.log(this.Fruit);

    });
    this.http.get(this.link2).subscribe(rel5 => {
      this.blogdata = rel5;

      console.log(this.blogdata);

    });
    this.blogId = this.activatedRoute.snapshot.paramMap.get('id');

  }
  onblogdertail() {
    document.getElementById("blogdetails")?.scrollIntoView({ behavior: "smooth" });

  }
  onSubmit() {
    console.log(this.Leave.value);
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


