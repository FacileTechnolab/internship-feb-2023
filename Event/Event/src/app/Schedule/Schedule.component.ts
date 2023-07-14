import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Schedule',
  templateUrl: './Schedule.component.html',
  styleUrls: ['./Schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  title = "EVENT SCHEDULE"
  desc = "Here is our event schedule"
  eventtime: any;
  url: string = '/assets/json/eventtime.json';
  data: Observable<any> | undefined;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data = this.http.get(this.url);
  }

}
