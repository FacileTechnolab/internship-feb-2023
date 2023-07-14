import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-TestingBox',
  templateUrl: './TestingBox.component.html',
  styleUrls: ['./TestingBox.component.css']
})
export class TestingBoxComponent implements OnInit {
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
