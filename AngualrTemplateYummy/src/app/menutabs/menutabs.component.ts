import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menutabs',
  templateUrl: './menutabs.component.html',
  styleUrls: ['./menutabs.component.css']
})
export class MenutabsComponent implements OnInit {
  @Input() tabsArray: string[] = [];
  @Output() onTabChange = new EventEmitter<number>();
  activatedTab: number = 0;
  
  constructor() { }

  ngOnInit() {
  }
  setTab(index:number)
  {
    this.activatedTab = index;
    debugger;
    this.onTabChange.emit(this.activatedTab);
  }
}
