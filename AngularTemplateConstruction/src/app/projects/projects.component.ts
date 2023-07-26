import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  title: string
  brList: any
  constructor() {
    this.title = "Projects"
    this.brList = [
      {
        title: 'Projects',
        url: "/projects",
        active: true
      }
    ]
  }

  ngOnInit() {
  }

}
