import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  url: string = "/assets/json/portchild.json";
  constructor(private http: HttpClient) { }
  port: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.port = res;

      console.log('icon', this.port)
    });
  }

}
