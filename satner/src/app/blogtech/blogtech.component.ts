import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blogtech',
  templateUrl: './blogtech.component.html',
  styleUrls: ['./blogtech.component.css']
})
export class BlogtechComponent implements OnInit {
  url: string = "/assets/json/tech.json"
  constructor(private http: HttpClient) { }
  @Input() tech: any;
  ngOnInit() {
    console.log(this.tech);

  }

}
