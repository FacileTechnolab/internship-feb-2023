import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singlenews',
  templateUrl: './singlenews.component.html',
  styleUrls: ['./singlenews.component.css']
})
export class SinglenewsComponent implements OnInit {
  crumb: any
  url: string ="assets/json/bread.json"
    constructor(private http: HttpClient) { }
  
    ngOnInit() {
      this.http.get(this.url).subscribe(res=> {
        this.crumb=res
      })
    }
  
  }
