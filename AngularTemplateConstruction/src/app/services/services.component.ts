import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

   title: string
    brList: any
    constructor() {
      this.title = "Service"
      this.brList = [
        {
          title: 'Service',
          url: "/services",
          active: true
        }
      ]
    }

  ngOnInit() {
  }

}
