import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blogmain',
  templateUrl: './blogmain.component.html',
  styleUrls: ['./blogmain.component.css']
})
export class BlogmainComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url1: string = "/assets/json/blogarea.json";
  blogarea: any;
  ngOnInit() {
    {
      this.http.get(this.url1).subscribe(rel => {
        this.blogarea = rel;

        console.log(this.blogarea);

      });
    }

  }
}
