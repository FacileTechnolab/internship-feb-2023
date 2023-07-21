import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-innerEvent',
  templateUrl: './innerEvent.component.html',
  styleUrls: ['./innerEvent.component.css']
})
export class InnerEventComponent implements OnInit {

  dataevent:any;
  url: string = '/assets/static/Event.json';
  @Input() value: any;
  data:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.data= this.http.get(this.url);
    //console.log('child', this.data);
  }

}
