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

  ngOnInit() {
    debugger
    console.log(this.tab);

  }


}

