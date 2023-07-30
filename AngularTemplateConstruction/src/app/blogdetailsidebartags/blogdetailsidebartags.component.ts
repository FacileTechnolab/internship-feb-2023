import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogdetailsidebartags',
  templateUrl: './blogdetailsidebartags.component.html',
  styleUrls: ['./blogdetailsidebartags.component.css']
})
export class BlogdetailsidebartagsComponent implements OnInit {
  url:string = "/assets/json/blogdetailsidebartags.json"
 @Input() tags: any;
  constructor() { }

  ngOnInit() {
  }
  onblogdetail()
  {
    document.getElementById("main")?.scrollIntoView({behavior: "smooth"});

  }
}
