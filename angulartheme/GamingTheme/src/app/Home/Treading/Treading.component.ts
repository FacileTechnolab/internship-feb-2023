import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Treading',
  templateUrl: './Treading.component.html',
  styleUrls: ['./Treading.component.css']
})
export class TreadingComponent implements OnInit {
  treders:any;
  tred : any;
  url: string = "assets/jsondata/treding.json"
  url2: string = "assets/jsondata/treadinglabel.json"
    constructor(private http: HttpClient) { }
  
    ngOnInit() {
      this.http.get(this.url2).subscribe(res => {
        this.tred = res;
       
      });
      this.http.get(this.url).subscribe(res => {
        this.treders = res;
       
      });
    }
}
