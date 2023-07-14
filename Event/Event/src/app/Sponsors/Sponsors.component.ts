import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Sponsors',
  templateUrl: './Sponsors.component.html',
  styleUrls: ['./Sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  title = "Sponsors";
  icon: any;
  url: string = '/assets/json/sponsorelogo.json';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.icon = res;
      console.log('icon', this.icon)
    });
  }

}
