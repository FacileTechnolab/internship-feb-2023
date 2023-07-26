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
  title: string
  brList: any
  projectdetinfodata: any;
  constructor(private http: HttpClient) {
    this.title = "Project Details"
    this.brList = [
      {
        title: 'Project Details',
        url: "/projects-details",
        active: true
      }
    ]
  }

  ngOnInit() {
 
  }
 
}
