import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coustructionbox',
  templateUrl: './coustructionbox.component.html',
  styleUrls: ['./coustructionbox.component.css']
})
export class CoustructionboxComponent implements OnInit {
  url: string = "/assets/json/counstuction.json" ;
  @Input() counstbox: any;

  ngOnInit() {
  }

}
