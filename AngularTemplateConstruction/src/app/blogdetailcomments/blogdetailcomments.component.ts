import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogdetailcomments',
  templateUrl: './blogdetailcomments.component.html',
  styleUrls: ['./blogdetailcomments.component.css']
})
export class BlogdetailcommentsComponent implements OnInit {
  title="8 Comments"
  url: string= "/assets/json/blogdetailcommentbox.json"
  commentvalue : any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{

      this.commentvalue =result;
    });
    console.log("projectdetailinfo",this.commentvalue)
  }

}
