import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogrightmain',
  templateUrl: './blogrightmain.component.html',
  styleUrls: ['./blogrightmain.component.css']
})
export class BlogrightmainComponent implements OnInit {
  url: string = "/assets/json/blogpost.json"
  constructor(private http: HttpClient) { }
  blogpost: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(rel => {
      this.blogpost = rel;

      // console.log(this.blogpost);

    });
  }

}
