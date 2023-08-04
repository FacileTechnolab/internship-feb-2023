import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';


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
  constructor() {

   }

  ngOnInit(){

  }

  settings = {
    counter: false,
    plugins: [lgZoom, lgThumbnail, lgFullscreen]
  }


  }

