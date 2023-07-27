import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallerychild',
  templateUrl: './gallerychild.component.html',
  styleUrls: ['./gallerychild.component.css']
})
export class GallerychildComponent implements OnInit {
  url: any = "/assets/json/gallery.json"
  constructor(private http: HttpClient) { }
  @Input() gallerydata: any;
  ngOnInit() {
    console.log(this.gallerydata);


  }

}
