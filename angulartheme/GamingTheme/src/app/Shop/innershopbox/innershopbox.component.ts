import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-innershopbox',
  templateUrl: './innershopbox.component.html',
  styleUrls: ['./innershopbox.component.css']
})
export class InnershopboxComponent implements OnInit {
@Input() value:any;
url:string="assets/jsondata/innershop.json"
  constructor() { }

  ngOnInit() {
    console.log(this.value);
  }

}
