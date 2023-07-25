import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactinfobox',
  templateUrl: './contactinfobox.component.html',
  styleUrls: ['./contactinfobox.component.css']
})
export class ContactinfoboxComponent implements OnInit {
  url: string = "/assets/json/contact.json"
  @Input() contactinfovalue: any;
  constructor() { }

  ngOnInit() {
  }

}
