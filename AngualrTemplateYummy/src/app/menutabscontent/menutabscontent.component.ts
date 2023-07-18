import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menutabscontent',
  templateUrl: './menutabscontent.component.html',
  styleUrls: ['./menutabscontent.component.css']
})
export class MenutabscontentComponent implements OnInit {
  activatedTabIndex: number = 0;
  // menutabarry : Array<any>;
  constructor() {
   
  }
  ngOnInit() {
  }
  // tabChange(tabIndex: number){
  //   debugger;
  //   this.activatedTabIndex = tabIndex;
  // }
}
