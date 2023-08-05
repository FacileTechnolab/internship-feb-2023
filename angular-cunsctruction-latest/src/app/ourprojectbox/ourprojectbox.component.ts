import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { Lightbox } from 'ngx-lightbox';


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

   _albums: Array<any> = [];
  isExpanded = false;


  filterTab() {
    this.isExpanded = !this.isExpanded;
  }

  url:string="/assets/json/ourprojectbox.json"
  @Input()  ourdata: any;
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 3; i++) {
      const src = 'assets/img/projects/remodeling-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/img/projects/remodeling-' + i + '3.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._albums.push(album);
    }
   }
   

  ngOnInit(){

  }
  
  open(index: number): void {
    // open lightbox
    debugger
    this._lightbox.open(this.ourdata.album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  // settings = {
  //   counter: false,
  //   plugins: [lgZoom, lgFullscreen]
  // }

  //  onBeforeSlide = (detail: BeforeSlideDetail): void => {
  // const { index, prevIndex } = detail;
  // console.log(index, prevIndex);
  // };
  }

