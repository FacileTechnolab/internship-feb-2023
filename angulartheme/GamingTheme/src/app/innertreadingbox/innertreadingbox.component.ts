import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-innertreadingbox',
  templateUrl: './innertreadingbox.component.html',
  styleUrls: ['./innertreadingbox.component.css']
})
export class InnertreadingboxComponent implements OnInit {
  @Input() treading:any;

    constructor() { }
  
    ngOnInit() {
      console.log(this.treading);
    }

}
