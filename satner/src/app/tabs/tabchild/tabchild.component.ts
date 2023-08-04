import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-tabchild',
  templateUrl: './tabchild.component.html',
  styleUrls: ['./tabchild.component.css']
})
export class TabchildComponent implements OnInit {
  @Input() filteredImages: any;
  _albums: Array<any> = [];
  images: any;

  constructor(private http: HttpClient, private _lightbox: Lightbox) {

    for (let i = 1; i <= 10; i++) {
      const src = 'assets/img/portfolio/p' + i + '.jpg';
      //const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/img/portfolio/p' + i + '-portfolio-details.jpg';
      const album = {
        src: src,
        // caption: caption,
        thumb: thumb
      };

      this._albums.push(album);
    }
  }
  url: string = "/assets/json/filter.json";
  url1: string = "/assets/json/portchild.json";
  home: any;

  ngOnInit() {
    this.http.get(this.url1).subscribe(res => {

      this.home = res;
    });


  }
  // onclick() {
  //   this._lightbox.open(this._albums, index);
  // }
  open(index: number): void {
    this._lightbox.open(this._albums, index);
  }
  close(): void {
    this._lightbox.close();
  }


}