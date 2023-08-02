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
  url: string = "assets/json/blogright.json";
  link: string = "/assets/json/news.json";
  url3: string = "assets/json/breadcrumb.json";
  link2: string = "/assets/json/blogimage.json";
  url5: string = "/assets/json/blogarea.json";
  news: any;
  blogId: any;
  blogdata: any;
  id: any;
  url2: string = "/assets/json/content.json";

  Leave = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    sub: new FormControl('', [Validators.required]),
    msg: new FormControl('')
  })
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  @Input() blogpost: any;
  data: any;
  Fruit: any;
  content: any;
  image: any;
  blogdate: any;
  blogi: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(rel => {
      this.blogpost = rel;
    });
    this.http.get(this.url5).subscribe(rel10 => {
      this.blogdate = rel10;
    });
    this.http.get(this.link).subscribe(rel2 => {
      this.news = rel2;
    });
    this.http.get(this.url2).subscribe(rel3 => {
      this.content = rel3;
    });
    this.http.get(this.url3).subscribe(result => {
      this.Fruit = result;
    });
    this.http.get(this.url5).subscribe(result5 => {
      this.blogi = result5;
    });
    this.http.get(this.link2).subscribe(rel5 => {
      //  this.blogdata = Object.values(rel5).find(x => x.id == this.id);
      this.blogdata = rel5;
      // console.log("blog data", this.blogdata);

    });
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id", this.id);
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
  // this.id = this.route.snapshot.paramMap.get('id');

  // console.log("id", this.id);
  // console.log("data", this.route.snapshot.paramMap.get('id'));

}


