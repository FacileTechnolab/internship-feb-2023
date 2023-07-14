import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-Eventtime',
  templateUrl: './Eventtime.component.html',
  styleUrls: ['./Eventtime.component.css'],


})
export class EventtimeComponent implements OnInit {
  eventtime: any;
  url: string = '/assets/json/eventtime.json';
  @Input() values: any;
  data: any[] = [];

  active = 1;

  constructor(private http: HttpClient) {


  }

  ngOnInit() {
    AOS.init();
    console.log('child', this.data);
  }

  // onNavClick(value: any) {

  //   var i, n = this.data.length;
  //   for (i = 0; i < n; ++i) {
  //     this.data[i].isActive = false;
  //   }


  // value.isActive = !value.isActive;
  // console.log('child', this.data);

}


