import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-Venue',
  templateUrl: './Venue.component.html',
  styleUrls: ['./Venue.component.css']
})
export class VenueComponent implements OnInit {
  title = 'venuedetails';
  venuedetails: any;
  url: string = 'assets/json/venueimage.json';


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.venuedetails = res;
      console.log('venuedetails', this.venuedetails)
    });
  }

}
