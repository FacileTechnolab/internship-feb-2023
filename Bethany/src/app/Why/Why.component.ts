import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Why',
  templateUrl: './Why.component.html',
  styleUrls: ['./Why.component.css']
})
export class WhyComponent implements OnInit {
 url: string= "/assets/json/Why.json"
  why:any
  @Input () value:any
    constructor(
      private http:HttpClient
    ) { }

  ngOnInit() {
    this.why=this.http.get(this.url)
    console.log(this.why)
  }

}
