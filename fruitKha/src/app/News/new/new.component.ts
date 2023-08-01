import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
url : string ="assets/json/OurNews.json"
url1: string ="assets/json/bread.json"

news1:any
crumb : any

constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {this.news1 = res; console.log(this.news1);}),
    this.http.get(this.url1).subscribe(res=> {this.crumb=res})

  }
  onnews(){   
    document.getElementById("new")?.scrollIntoView({behavior: 'smooth'})
 
  }
}
