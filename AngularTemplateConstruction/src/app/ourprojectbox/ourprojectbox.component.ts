import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourprojectbox',
  templateUrl: './ourprojectbox.component.html',
  styleUrls: ['./ourprojectbox.component.css']
})
export class OurprojectboxComponent implements OnInit {
  url:string="/assets/json/ourprojectbox.json"
  @Input()  ourdata: any;
  constructor() { }

  ngOnInit() {
  }

}
