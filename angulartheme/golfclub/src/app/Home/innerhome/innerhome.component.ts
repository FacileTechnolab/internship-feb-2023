import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innerhome',
  templateUrl: './innerhome.component.html',
  styleUrls: ['./innerhome.component.css']
})
export class InnerhomeComponent implements OnInit {
  value:any;

  url: string = '/assets/static/data.json';
  constructor(private http: HttpClient) { }

  
    ngOnInit() {
      this.http.get(this.url).subscribe(res => {
        this.value = res;
       // console.log(this.value);
      });
  }

}
