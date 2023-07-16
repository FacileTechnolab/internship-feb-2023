import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  tabs : string [] = ['Starters', 'Breakfast', 'Lunch', 'Dinner'];
  activatedTabIndex: number = 0;
  constructor() { }

  ngOnInit() {
  }
  tabChange(tabIndex: number){
    debugger;
    this.activatedTabIndex = tabIndex;
  }

}
