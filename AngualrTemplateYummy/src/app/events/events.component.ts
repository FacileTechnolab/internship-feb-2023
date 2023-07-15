import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

   url:string= "/assets/json/eventsdata.json" ;
  eventsbox: Observable<any> | undefined;
  constructor(private http: HttpClient) { }

  ngOnInit() {
     this.eventsbox = this.http.get(this.url);
   console.log(this.eventsbox)
  }

}
