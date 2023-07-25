import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-Whybox',
  templateUrl: './Whybox.component.html',
  styleUrls: ['./Whybox.component.css']
})
export class WhyboxComponent implements OnInit {

 url: string="/assets/json/why.json"
 @Input () Whybox:any

  constructor() { }

  ngOnInit() {
  }

}
