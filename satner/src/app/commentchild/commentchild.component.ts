import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commentchild',
  templateUrl: './commentchild.component.html',
  styleUrls: ['./commentchild.component.css']
})
export class CommentchildComponent implements OnInit {
  url: string = "/assets/json/comment.json";
  @Input() comment: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.comment);

  }

}
