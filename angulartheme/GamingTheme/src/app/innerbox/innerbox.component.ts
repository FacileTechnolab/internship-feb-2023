import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-innerbox',
  templateUrl: './innerbox.component.html',
  styleUrls: ['./innerbox.component.css']
})
export class InnerboxComponent implements OnInit {
  @Input() value:any;

    constructor() { }
  
    ngOnInit() {
      console.log(this.value);
    }
}
