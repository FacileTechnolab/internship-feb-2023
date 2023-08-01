import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkoutright',
  templateUrl: './checkoutright.component.html',
  styleUrls: ['./checkoutright.component.css']
})
export class CheckoutrightComponent implements OnInit {
url: string ="assets/json/checkoutrightbox.json"
@Input () right :any

  constructor() { }

  ngOnInit() {
  }
  oncheckout(){
    document.getElementById("main")?.scrollIntoView({behavior: 'smooth'})
  }

}
