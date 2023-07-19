import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  //tabs: string[] = ['ALL', 'POPULAR', 'LATEST', 'FOLLOWING', 'UPCOMMING'];
  constructor() { }
  //  activatedTabIndex: number = 0;
  ngOnInit() {
  }
  // tabchange(tabIndex: number) {

  //   this.activatedTabIndex = tabIndex;
  // }
}
