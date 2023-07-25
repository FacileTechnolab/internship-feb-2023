import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Why',
  templateUrl: './Why.component.html',
  styleUrls: ['./Why.component.css']
})
export class WhyComponent implements OnInit {
url : string="assets/json/why.json"
box:any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {this.box = res; console.log(this.box); }  )
  }

}
