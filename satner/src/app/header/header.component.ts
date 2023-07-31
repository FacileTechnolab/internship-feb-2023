import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  url: string = "/assets/json/header.json"
  constructor(private http: HttpClient) { }
  head: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(result => {
      this.head = result;




    });
  }

}
