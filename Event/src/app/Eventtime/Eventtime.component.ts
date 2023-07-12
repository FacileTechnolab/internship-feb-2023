import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Eventtime',
  templateUrl: './Eventtime.component.html',
  styleUrls: ['./Eventtime.component.css']
})
export class EventtimeComponent implements OnInit {
  eventtime: any;
  url: string = '/assets/json/eventtime.json';
  @Input() value: any;
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('child', this.data);
  }

}
