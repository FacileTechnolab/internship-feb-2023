import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Category',
  templateUrl: './Category.component.html',
  styleUrls: ['./Category.component.css']
})
export class CategoryComponent implements OnInit {
  url: string = "assets/jsondata/treadinglabel.json"
  url3: string = "assets/jsondata/categories.json"
  constructor(private http: HttpClient) { }
  treders:any;
  crokery:any;
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.  treders = res;
     
    });
    this.http.get(this.url3).subscribe(res => {
      this.crokery = res;
     
    });
  }

}
