import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-innerplayedbox',
  templateUrl: './innerplayedbox.component.html',
  styleUrls: ['./innerplayedbox.component.css']
})
export class InnerplayedboxComponent implements OnInit {
  @Input()played:any;
  url: string = "assets/jsondata/Mostplayed.json"
  constructor() { }

  ngOnInit() {
    console.log(this.played);
  }

}
