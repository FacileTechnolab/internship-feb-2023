import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galleryinner',
  templateUrl: './galleryinner.component.html',
  styleUrls: ['./galleryinner.component.css']
})
export class GalleryinnerComponent implements OnInit {
  galleryimage: any;
  @Input() value: any;
  data: any;
  url: string = "/assets/json/galleryimg.json"
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('child', this.data)
  }

}
