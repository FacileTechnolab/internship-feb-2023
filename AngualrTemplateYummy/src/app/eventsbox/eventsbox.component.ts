import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventsbox',
  templateUrl: './eventsbox.component.html',
  styleUrls: ['./eventsbox.component.css']
})
export class EventsboxComponent implements OnInit {

  url: string = "/assets/json/eventsdata.json" ;
  
  @Input() value: any;
  eventsbox: any;
 constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
