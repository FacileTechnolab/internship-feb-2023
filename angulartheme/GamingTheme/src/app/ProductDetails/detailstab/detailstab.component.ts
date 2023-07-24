import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detailstab',
  templateUrl: './detailstab.component.html',
  styleUrls: ['./detailstab.component.css']
})
export class DetailstabComponent implements OnInit {
@Input() tabsArray:string[]=[];
activatedTab:number=0;
  constructor() { }
@Output()onTabChange =new EventEmitter<number>();
  ngOnInit() {
  }
 setTab(index:number)
 {
this.activatedTab = index;
this.onTabChange.emit(this.activatedTab);
 }
}
