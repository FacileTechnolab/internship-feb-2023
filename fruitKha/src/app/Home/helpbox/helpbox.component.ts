import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpbox',
  templateUrl: './helpbox.component.html',
  styleUrls: ['./helpbox.component.css']
})
export class HelpboxComponent implements OnInit {
  url: string="assets/json/help.json"
  @Input() helpbox : any;
  constructor() { }

  ngOnInit() {
  }

}
