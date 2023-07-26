import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altservices2',
  templateUrl: './altservices2.component.html',
  styleUrls: ['./altservices2.component.css']
})
export class Altservices2Component implements OnInit {
  url: string = "/assets/json/altser2.json"

  altserboxdata: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.altserboxdata =result
    });
 console.log(this.altserboxdata)
  }

}
