import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogdetailsidebarpost',
  templateUrl: './blogdetailsidebarpost.component.html',
  styleUrls: ['./blogdetailsidebarpost.component.css']
})
export class BlogdetailsidebarpostComponent implements OnInit {
  url: string="/assets/json/blogdetailsidebarpost.json"
  @Input() sidbarpostdata: any;
  constructor() { }

  ngOnInit() {
  }

}
