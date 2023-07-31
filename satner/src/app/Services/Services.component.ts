import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Services',
  templateUrl: './Services.component.html',
  styleUrls: ['./Services.component.css']
})
export class ServicesComponent implements OnInit {
  url: string = "assets/json/breadcrumb.json";
  constructor(private http: HttpClient) { }
  Fruit: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(rel => {
      this.Fruit = rel;
      // console.log(this.Fruit);

    });
  }

}

