import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
  url: string = "/assets/json/projectdetailinfo.json";
  url1: string = "/assets/json/projectdetailsideinfo.json";
  url2:string= "/assets/json/breadcrumbs.json"
  breaddata: any;
  projectdetinfodata: any;
  constructor(private http: HttpClient) {
   
  }

  ngOnInit() {
    this.http.get(this.url2).subscribe(result=>{
       
      this.breaddata =result
   });
console.log(this.breaddata)
  }
 
}
