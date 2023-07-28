import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogdetailsidebartags',
  templateUrl: './blogdetailsidebartags.component.html',
  styleUrls: ['./blogdetailsidebartags.component.css']
})
export class BlogdetailsidebartagsComponent implements OnInit {
  url3:string = "/assets/json/blogdetailsidebartags.json"
 @Input() tags: any;
  constructor() { }

  ngOnInit() {
  }

}
