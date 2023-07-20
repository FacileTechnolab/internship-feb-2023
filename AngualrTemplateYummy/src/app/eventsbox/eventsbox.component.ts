import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-eventsbox',
  templateUrl: './eventsbox.component.html',
  styleUrls: ['./eventsbox.component.css']
})
export class EventsboxComponent implements OnInit {

  url: string = "/assets/json/eventsdata.json" ;
  
  @Input() eventsbox: any;
 constructor(private http: HttpClient) { }

  ngOnInit() {
    debugger;
    console.log(this.eventsbox)
  }
 
}
