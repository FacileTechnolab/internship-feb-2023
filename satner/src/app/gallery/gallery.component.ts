import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  url: any = "/assets/json/gallery.json"
  constructor(private http: HttpClient) { }
  gallery: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(result => {
      this.gallery = result;

      console.log(this.gallery);
    });
  }

}
