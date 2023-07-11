import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NumberSymbol } from '@angular/common';
@Component({
  selector: 'app-hotelreview',
  templateUrl: './hotelreview.component.html',
  styleUrls: ['./hotelreview.component.css']
})
export class HotelreviewComponent implements OnInit {
  // title = 'hotel';
  hotelreview: any;
  url: string = '/assets/json/hotelreview.json';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get(this.url).subscribe(res => {
    //   this.hotelreview = res;
    //   console.log('hotel', this.hotelreview)
    // });

  }

}
