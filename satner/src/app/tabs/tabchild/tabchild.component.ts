import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabchild',
  templateUrl: './tabchild.component.html',
  styleUrls: ['./tabchild.component.css']
})
export class TabchildComponent implements OnInit {
  @Input() tab: any;
  constructor(private http: HttpClient) { }
  url: string = "/assets/json/filter.json";
  url1: string = "/assets/json/portchild.json";
  home: any;
  ngOnInit() {
    this.http.get(this.url1).subscribe(res => {

      this.home = res;
    });


  }

}