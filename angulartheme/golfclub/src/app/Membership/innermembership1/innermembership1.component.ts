import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-innermembership1',
  templateUrl: './innermembership1.component.html',
  styleUrls: ['./innermembership1.component.css']
})
export class Innermembership1Component implements OnInit {
  
  url: string = '/assets/static/membership1.json';
  // @Input() value: any;
  // data:any;
  constructor(private http: HttpClient) { }
  value:any;

  
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.value = res;
     // console.log(this.value);
    });
  }

}
