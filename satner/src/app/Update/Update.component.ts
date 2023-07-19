import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Update',
  templateUrl: './Update.component.html',
  styleUrls: ['./Update.component.css']
})
export class UpdateComponent implements OnInit {
  url: string = "/assets/json/update.json"
  constructor(private http: HttpClient) { }
  data: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.data = res;
      console.log(this.data);
    })
  }

}

