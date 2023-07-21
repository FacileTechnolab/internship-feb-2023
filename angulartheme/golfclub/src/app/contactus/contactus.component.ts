import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
title="Contact Tiya";
title2="London, United Kingdom";
data="(020) 010-020-0340";
url:string="tel: 010-020-0340";
url2:string="mailto:info@company.com";
info="info@company.com";
label="Directions";
img="assets/images/WorldMap.svg";
  constructor() { }

  ngOnInit() {
  }
  onSubmit(data:any) {
    console.warn(data);
  alert("successful registration ")
    }

}
