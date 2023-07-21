import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Events',
  templateUrl: './Events.component.html',
  styleUrls: ['./Events.component.css']
})
export class EventsComponent implements OnInit {
  title="Upcoming Events"
  dataevent:any;
  url: string = '/assets/static/Event.json';
  data: Observable<any> | undefined;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.data = this.http.get(this.url);
   
  }

}
