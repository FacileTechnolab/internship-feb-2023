import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  url: string = "/assets/json/breadcrumb.json"
  constructor(private http: HttpClient) { }
  @Input() bread: any;
  ngOnInit() {
    // this.http.get(this.url).subscribe(rel => {
    //   this.bread = rel;

    console.log(this.bread);

  }
}
