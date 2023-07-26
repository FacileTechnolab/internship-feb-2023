import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  title: string
  brList: any
  constructor() {
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
