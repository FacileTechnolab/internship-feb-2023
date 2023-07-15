import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  url: string = "/assets/json/gallerydata.json" ;
  gallbox: Observable<any> | undefined;
  @Input() value: any;

 constructor(private http: HttpClient) { }

  ngOnInit() {
    this.gallbox = this.http.get(this.url);
    console.log(this.gallbox)
  }

}
