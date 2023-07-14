import { Component, Input, OnInit } from '@angular/core';
import { HotelreviewComponent } from '../hotelreview/hotelreview.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-Hotels',
  templateUrl: './Hotels.component.html',
  styleUrls: ['./Hotels.component.css']
})
export class HotelsComponent implements OnInit {
  title = 'hotel';
  hotelreview: any;
  url: string = '/assets/json/hotelreview.json';
  data: Observable<any> | undefined;

  // eventHandler(event: object[]) {
  //   this.hotelreview = event;
  //   console.log("parent", event);

  // }
  // parentfunction(data: any) {
  //   this.hotelreview = data;
  //   console.log(this.hotelreview);
  // }

  constructor(private http: HttpClient) { }
  // @Input() item = '';
  ngOnInit(): void {
    this.data = this.http.get(this.url);
  }




}


