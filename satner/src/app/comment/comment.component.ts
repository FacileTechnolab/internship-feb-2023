import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  url: string = "/assets/json/comment.json";
  constructor(private http: HttpClient) { }
  con: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(rel => {
      this.con = rel;

      // console.log(this.con);

    });
  }

}
