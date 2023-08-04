import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  url:string= "/assets/json/breadcrumbs.json"
  breaddata: any;
 
    constructor(private http : HttpClient) {
    }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
       
      this.breaddata =result
   });
console.log(this.breaddata)
  }

}
