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
  //data: Observable<any> | undefined;
  time: string[] = ['Day1', 'Day2', 'Day3'];
  activatedTabIndex: number = 0;
  data: any;
  constructor(private http: HttpClient) { }
  value: any;
  // ngOnInit() {
  //   this.data = this.http.get(this.url);
  // }

  tabchange(tabIndex: number) {

    this.activatedTabIndex = tabIndex;
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.value = res;
      console.log('scheduledetails', this.value)
    });
  }
}


