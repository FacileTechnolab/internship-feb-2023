import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-ourprojectbox',
  templateUrl: './ourprojectbox.component.html',
  styleUrls: ['./ourprojectbox.component.css'],
  animations:[
    trigger('autoHeight', [
      state('expanded', style({ height: '*' })),
      state('collapsed', style({ height: '0' })),
      transition('expanded <=> collapsed', animate('300ms ease-in-out')),
    ]),
  ]
})
export class OurprojectboxComponent implements OnInit {
  isExpanded = false;

  filterTab() {
    this.isExpanded = !this.isExpanded;
  }

  url:string="/assets/json/ourprojectbox.json"
  @Input()  ourdata: any;
  constructor() { }

  ngOnInit() {
  }

}
