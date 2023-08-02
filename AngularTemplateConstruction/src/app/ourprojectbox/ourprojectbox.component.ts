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
  i:number;
previewImage= false;
showMask=false;
// currentLightboxImage: Item=  this.ourdata[0];
currentIndex=0;
controls= true;
totalImageCount = 0;
@Input() showCount : boolean;

  filterTab() {
    this.isExpanded = !this.isExpanded;
  }

  url:string="/assets/json/ourprojectbox.json"
  @Input()  ourdata: any;
  constructor() {
    
   }

  ngOnInit() : void {
    this.totalImageCount = this.ourdata.length;
  }
  onPreview(index:number):void{
    this.previewImage = true;
    this.showMask = true;

this.currentIndex = index;
// this.currentLightboxImage=this.ourdata[index]
  }
}
