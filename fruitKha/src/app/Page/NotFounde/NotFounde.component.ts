import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-NotFounde',
  templateUrl: './NotFounde.component.html',
  styleUrls: ['./NotFounde.component.css']
})
export class NotFoundeComponent implements OnInit {
  crumb: any
  url: string ="assets/json/bread.json"
    constructor(private http: HttpClient) { }
  
    ngOnInit() {
      this.http.get(this.url).subscribe(res=> {
        this.crumb=res
      })
    }
  
  }