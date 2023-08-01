import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleboxright',
  templateUrl: './singleboxright.component.html',
  styleUrls: ['./singleboxright.component.css']
})
export class SingleboxrightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onreply()
  {
    document.getElementById("main")?.scrollIntoView({behavior: 'smooth'})
 
  }
}
