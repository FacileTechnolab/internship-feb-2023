import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-OurNewsbox',
  templateUrl: './OurNewsbox.component.html',
  styleUrls: ['./OurNewsbox.component.css']
})
export class OurNewsboxComponent implements OnInit {
url: string="assets/json/OurNews.json"  
@Input () news :any


  constructor() { }

  ngOnInit() {
  }

}
