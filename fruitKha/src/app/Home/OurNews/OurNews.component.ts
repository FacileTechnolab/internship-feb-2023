import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OurNews',
  templateUrl: './OurNews.component.html',
  styleUrls: ['./OurNews.component.css']
})
export class OurNewsComponent implements OnInit {
  url: string="assets/json/OurNews.json"  
  newbox:any
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {this.newbox = res; console.log(this.newbox);}) 
  }

}
