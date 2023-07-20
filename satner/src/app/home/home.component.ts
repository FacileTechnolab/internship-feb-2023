import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url: string = "/assets/json/home.json"
  constructor(private http: HttpClient) { }
  home: any;
  ngOnInit() {

  }

}
