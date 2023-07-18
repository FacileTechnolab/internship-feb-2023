import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portfoliotab',
  templateUrl: './portfoliotab.component.html',
  styleUrls: ['./portfoliotab.component.css']
})
export class PortfoliotabComponent implements OnInit {

  
  @Input () tabArray: string [] =[];
  @Output() onTabChange = new EventEmitter<number>();
  activatedTab: number =0;
  A='ALL'
  B='APP'
  C='CARD'
  D='WEB'
  constructor() { }

  ngOnInit() {
  }
  setTab(index:number){
    this.activatedTab = index;
    this.onTabChange.emit(this.activatedTab);
  }

}
