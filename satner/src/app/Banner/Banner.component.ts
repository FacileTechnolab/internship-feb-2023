import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-Banner',
  templateUrl: './Banner.component.html',
  styleUrls: ['./Banner.component.css']
})
export class BannerComponent implements OnInit {
  url: string = "/assets/json/home.json"
  constructor(private http: HttpClient) { }
  home: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.home = res;
      //console.log('icon', this.home)
    })
  }



}
