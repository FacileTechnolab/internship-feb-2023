import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-homenavtab',
  templateUrl: './homenavtab.component.html',
  styleUrls: ['./homenavtab.component.css']
})
export class HomenavtabComponent implements OnInit {
  url: string = "/assets/json/tab.json" ;
  // @Input() tabtext: any;
 

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
