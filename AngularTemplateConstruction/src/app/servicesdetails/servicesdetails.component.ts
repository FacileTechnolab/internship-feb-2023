import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicesdetails',
  templateUrl: './servicesdetails.component.html',
  styleUrls: ['./servicesdetails.component.css']
})
export class ServicesdetailsComponent implements OnInit {
  url: string = "/assets/json/servicesdetails.json"
  serdetaildata: any;

  title: string
  brList: any
  constructor(private http:HttpClient) {
    this.title = "Service Details"
    this.brList = [
      {
        title: 'Service Details',
        url: "/services-details",
        active: true
      }
    ]
   }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.serdetaildata =result
    });
 console.log(this.serdetaildata)
  }


  


}
