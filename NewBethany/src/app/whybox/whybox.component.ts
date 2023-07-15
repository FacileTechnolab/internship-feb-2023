import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-whybox',
  templateUrl: './whybox.component.html',
  styleUrls: ['./whybox.component.css']
})
export class WhyboxComponent implements OnInit {

url: string= "/assets/json/Why.json"
why:any
@Input () value:any
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit( ) {
    console.log("child", this.why);
  }

}
