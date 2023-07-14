import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Teambox',
  templateUrl: './Teambox.component.html',
  styleUrls: ['./Teambox.component.css']
})

export class TeamboxComponent implements OnInit {

  

  url:string="assets/json/teamdetails.json";
  data:any;
  @Input () value:any
    constructor(
      private http:HttpClient
    ) { }

  ngOnInit() {
    console.log("child",this.data);
  }

}
