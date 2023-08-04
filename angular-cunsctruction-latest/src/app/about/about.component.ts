import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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
