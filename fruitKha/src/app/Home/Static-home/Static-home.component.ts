import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Static-home',
  templateUrl: './Static-home.component.html',
  styleUrls: ['./Static-home.component.css']
})
export class StaticHomeComponent implements OnInit {
url: string="/assets/json/home.json"
home:any;

constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res =>{this.home = res; console.log(this.home);} )
  }
}
