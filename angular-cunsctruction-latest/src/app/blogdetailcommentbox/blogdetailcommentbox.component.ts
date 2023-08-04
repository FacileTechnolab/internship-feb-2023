import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogdetailcommentbox',
  templateUrl: './blogdetailcommentbox.component.html',
  styleUrls: ['./blogdetailcommentbox.component.css']
})
export class BlogdetailcommentboxComponent implements OnInit {
  url: string= "/assets/json/blogdetailcommentbox.json"
  @Input () commentdata: any;
  constructor() { }

  ngOnInit() {
  }

}
