import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogdetailautorsocial',
  templateUrl: './blogdetailautorsocial.component.html',
  styleUrls: ['./blogdetailautorsocial.component.css']
})
export class BlogdetailautorsocialComponent implements OnInit {
   url:string= "/assets/json/blogdetailautorsocila.json"
   @Input() blodetsociladta: any;
  constructor() { }

  ngOnInit() {
  }

}
