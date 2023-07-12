import { Component, Input, OnInit } from '@angular/core';
import { HotelreviewComponent } from '../hotelreview/hotelreview.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-Hotels',
  templateUrl: './Hotels.component.html',
  styleUrls: ['./Hotels.component.css']
})
export class HotelsComponent implements OnInit {
  title = 'hotel';
  hotelreview: any;
  url: string = '/assets/json/hotelreview.json';

  eventHandler(event: object[]) {
    this.hotelreview = event;
    console.log("parent", event);

  }

  constructor(private http: HttpClient) { }
  // @Input() item = '';
  ngOnInit(): void {
    // this.http.get(this.url).subscribe(res => {
    //   this.hotelreview = res;
    //   console.log('hotel', this.hotelreview)
    // });
  }




}


