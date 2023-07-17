import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Gallery',
  templateUrl: './Gallery.component.html',
  styleUrls: ['./Gallery.component.css']
})
export class GalleryComponent implements OnInit {
  title = "Gallery";
  desc = "Check our gallery from the recent events";
  constructor(private http: HttpClient) { }

  data: Observable<any> | undefined;
  url: string = "/assets/json/galleryimg.json"
  @Input() value: any;
  ngOnInit() {
    this.data = this.http.get(this.url);

    console.log(this.data)
  }

}
