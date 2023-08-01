import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  url: string = "/assets/json/portchild.json";
  url1: string = "assets/json/breadcrumb.json";
  Fruit: any;
  link: string = "/assets/json/filter.json";
  data: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  port: any;

  id: any;

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.port = res;

      console.log('icon', this.port)
    });
    this.http.get(this.url1).subscribe(rel1 => {
      this.Fruit = rel1;
      console.log(this.Fruit);

    });
    this.http.get(this.link).subscribe(res2 => {
      this.data = res2;


      console.log(this.data);

    });
    this.id = this.route.snapshot.paramMap.get('id');

    console.log("id", this.id);
    console.log("data", this.route.snapshot.paramMap.get('id'));
  }




}



