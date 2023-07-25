import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-MostPlayed',
  templateUrl: './MostPlayed.component.html',
  styleUrls: ['./MostPlayed.component.css']
})
export class MostPlayedComponent implements OnInit {
  url: string = "assets/jsondata/treadinglabel.json"
  constructor(private http: HttpClient) { }
  treders:any;
  Most:any;
  url2: string ="assets/jsondata/Mostplayed.json"
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.  treders = res;
     
    });
    this.http.get(this.url2).subscribe(res => {
      this.Most = res;
      
    });
  }

}
