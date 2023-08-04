import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicescard',
  templateUrl: './servicescard.component.html',
  styleUrls: ['./servicescard.component.css']
})
export class ServicescardComponent implements OnInit {
  url: string = "/assets/json/servicescard.json";
  sercarddata: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.sercarddata =result
    });
 console.log(this.sercarddata)
  }

}
