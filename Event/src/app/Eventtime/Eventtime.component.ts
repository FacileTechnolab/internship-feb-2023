import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import * as AOS from 'aos';

@Component({
  selector: 'app-Eventtime',
  templateUrl: './Eventtime.component.html',
  styleUrls: ['./Eventtime.component.css'],


})
export class EventtimeComponent implements OnInit {
  // eventtime: any;
  url: string = '/assets/json/eventtime.json';
  @Input() tabarray: string[] = [];
  @Output() onTabChange = new EventEmitter<number>();

  activitedtab: number = 0;
  activatedTabIndex: number = 0;
  @Input() value: any;
  constructor(private http: HttpClient) {



  }
  setTab(index: number) {
    this.activitedtab = index;
    this.onTabChange.emit(this.activitedtab);
  }
  data: any;
  table: any;
  ngOnInit() {


    this.http.get(this.url).subscribe(res => {
      this.table = res;

      console.log('child', this.data);

    });


  }
}

