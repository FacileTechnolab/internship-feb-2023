import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
home:any;
url:string="assets/jsondata/home.json";
head:any;
url2:string="assets/jsondata/header.json"
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res=>{
      this.home=res;
    });
    this.http.get(this.url2).subscribe(res=>{
      this.head=res;
    });
  }
  

}
