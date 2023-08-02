import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blogimage',
  templateUrl: './blogimage.component.html',
  styleUrls: ['./blogimage.component.css']
})
export class BlogimageComponent implements OnInit {
  url: string = "/assets/json/blogarea.json"
  constructor(private http: HttpClient) { }
  @Input() data: any;
  ngOnInit() {



  }

}
