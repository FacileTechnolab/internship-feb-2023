import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testingbox',
  templateUrl: './testingbox.component.html',
  styleUrls: ['./testingbox.component.css']
})
export class TestingboxComponent implements OnInit {
  url:string= "/assets/json/testi.json"
  data:any;
  @Input () value:any

  constructor(
    private http:HttpClient
  ) {}

  ngOnInit() {
      console.log("child", this.data);
  }
}
