import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-innercontact',
  templateUrl: './innercontact.component.html',
  styleUrls: ['./innercontact.component.css']
})
export class InnercontactComponent implements OnInit {
@Input()details:any;

  constructor() { }

  ngOnInit() {
  }

}
