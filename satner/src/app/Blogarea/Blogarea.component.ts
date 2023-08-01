import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Blogarea',
  templateUrl: './Blogarea.component.html',
  styleUrls: ['./Blogarea.component.css']
})
export class BlogareaComponent implements OnInit {
  url: string = "/assets/json/blogarea.json";
  @Input() area: any;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  data: any;
  fruit: any;
  imageid: any;
  image: any;
  ngOnInit() {

  }

}
