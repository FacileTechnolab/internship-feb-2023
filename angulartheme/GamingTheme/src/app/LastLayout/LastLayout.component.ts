import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-LastLayout',
  templateUrl: './LastLayout.component.html',
  styleUrls: ['./LastLayout.component.css']
})
export class LastLayoutComponent implements OnInit {
layout:any;
url:string="assets/jsondata/lastcontaine.json"
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res=>{
      this.layout=res;
    }
      );
  }

}
