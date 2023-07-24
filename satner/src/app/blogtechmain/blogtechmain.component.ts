import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogtechmain',
  templateUrl: './blogtechmain.component.html',
  styleUrls: ['./blogtechmain.component.css']
})
export class BlogtechmainComponent implements OnInit {
  url: string = "/assets/json/tech.json"
  constructor(private http: HttpClient) { }
  blogtech: any;

  ngOnInit() {
    this.http.get(this.url).subscribe(rel => {
      this.blogtech = rel;

      console.log(this.blogtech);

    });
  }

}
