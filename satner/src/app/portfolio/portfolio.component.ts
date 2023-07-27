import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  url: string = "assets/json/breadcrumb.json";
  constructor(private http: HttpClient) { }
  Fruit: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(rel => {
      this.Fruit = rel;
      console.log(this.Fruit);

    });
  }

}
