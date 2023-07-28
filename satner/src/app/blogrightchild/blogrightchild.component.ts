import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blogrightchild',
  templateUrl: './blogrightchild.component.html',
  styleUrls: ['./blogrightchild.component.css']
})
export class BlogrightchildComponent implements OnInit {
  url: string = "/assets/json/blogpost.json"
  constructor(private http: HttpClient) { }
  @Input() post: any;
  ngOnInit() {
    //console.log(this.post);

  }

}
