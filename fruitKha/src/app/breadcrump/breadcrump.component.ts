import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.css']
})
export class BreadcrumpComponent implements OnInit {
@Input () bread :any
url: string ="assets/json/bread.json"
  constructor() { }

  ngOnInit() {
    console.log(this.bread)
  }

}
