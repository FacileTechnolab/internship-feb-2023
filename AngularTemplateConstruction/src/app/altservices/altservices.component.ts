import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altservices',
  templateUrl: './altservices.component.html',
  styleUrls: ['./altservices.component.css']
})
export class AltservicesComponent implements OnInit {
  url: string = "/assets/json/altservices.json" ;
  altserboxdata: any;
 
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.altserboxdata =result
    });
 console.log(this.altserboxdata)
  }

}
