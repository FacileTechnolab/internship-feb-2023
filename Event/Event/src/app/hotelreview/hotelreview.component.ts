import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as data from '../../assets/json/hotelreview.json';
@Component({
  selector: 'app-hotelreview',
  templateUrl: './hotelreview.component.html',
  styleUrls: ['./hotelreview.component.css']
})
export class HotelreviewComponent implements OnInit {
  // title = 'hotel';
  hotelreview: any;
  url: string = '/assets/json/hotelreview.json';

  // @Output() data: EventEmitter<object[]> = new EventEmitter<object[]>();
  @Input() value: any;
  data: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('child', this.data);
    // this.http.get(this.url).subscribe(res => {
    //   this.hotelreview([res]);
    // });

  }

}
