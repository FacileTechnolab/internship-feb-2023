import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';

interface tab {
  class: string,
  img1: string,
  name1: string,
  desc1: string,
  type: string,
  type1: string;
}
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  Images: tab[] = [];
  private _album: Array<string> = [];
  filteredImages: tab[] = this.Images;
  home: any;
  list: any;
  _albums: Array<any> = [];
  // _albums: any;
  url: string = "/assets/json/filter.json";
  tab1 = "all";
  tab2 = "popular";
  tab3 = "latest";
  tab4 = "following";
  tab5 = "upcoming";
  image: any;

  imageid: any;
  //tabs: string[] = ['ALL', 'POPULAR', 'LATEST', 'FOLLOWING', 'UPCOMMING'];
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private _lightbox: Lightbox) {
    for (let i = 1; i <= 10; i++) {
      const src = '/assets/img/portfolio/p' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '/assets/img/portfolio/' + i + '-portfolio-details.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };

      this._albums.push(album);
    }
  }

  filterImages(type: string): void {
    if (type === 'all') {
      this.filteredImages = this.Images;
    }
    else {
      this.filteredImages = this.Images.filter(tab => tab.type === type || tab.type1 === type);
    }
  }
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.home = res;
      this.Images = this.home;
      this.imageid = this.activatedRoute.snapshot.params['id'];
      this.image = this.home.find((x: any) => x.id == this.imageid)
      // console.log('icon', this.home)
      this.filteredImages = this.Images;
    });

  }
  open(index: number): void {
    this._lightbox.open(this._albums, index);
  }
  close(): void {
    this._lightbox.close();
  }


}
