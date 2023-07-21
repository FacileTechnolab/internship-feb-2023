import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-Blogarea',
  templateUrl: './Blogarea.component.html',
  styleUrls: ['./Blogarea.component.css']
})
export class BlogareaComponent implements OnInit {
  url: string = "/assets/json/blogarea.json";
  @Input() area: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.area)
  }

}
