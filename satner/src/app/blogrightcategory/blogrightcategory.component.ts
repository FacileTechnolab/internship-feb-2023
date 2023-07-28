import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogrightcategory',
  templateUrl: './blogrightcategory.component.html',
  styleUrls: ['./blogrightcategory.component.css']
})
export class BlogrightcategoryComponent implements OnInit {
  url: string = "/assets/json/blogrightcategory.json";
  category: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(rel => {
      this.category = rel;

      //console.log(this.category);

    });
  }

}
