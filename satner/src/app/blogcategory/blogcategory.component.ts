import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blogcategory',
  templateUrl: './blogcategory.component.html',
  styleUrls: ['./blogcategory.component.css']
})
export class BlogcategoryComponent implements OnInit {
  url: string = "/assets/json/blogcategory.json";
  @Input() blogcategory: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.blogcategory);

  }

}
