import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testichild',
  templateUrl: './testichild.component.html',
  styleUrls: ['./testichild.component.css']
})
export class TestichildComponent implements OnInit {
  url: string= "assets/json/testimonail.json"
  @Input () testi:any
  


  constructor() { }

  ngOnInit() {
  }

}
