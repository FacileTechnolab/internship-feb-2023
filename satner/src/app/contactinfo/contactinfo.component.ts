import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.css']
})
export class ContactinfoComponent implements OnInit {
  url: string = "/assets/json/contact.json";
  @Input() contact: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.contact);

  }

}
