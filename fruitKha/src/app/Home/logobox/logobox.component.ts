import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logobox',
  templateUrl: './logobox.component.html',
  styleUrls: ['./logobox.component.css']
})
export class LogoboxComponent implements OnInit {
  url : string="assets/json/logo.json"
 @Input () logo : any
  
  constructor() { }

  ngOnInit() {
  }
}
