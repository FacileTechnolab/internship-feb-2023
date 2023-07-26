import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  url: string = "/assets/json/breadcrumb.json"
  constructor(private http: HttpClient) { }
  Fruit: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(rel => {
      this.Fruit = rel;
      console.log(this.Fruit);

    });
  }
}
