import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datamain',
  templateUrl: './datamain.component.html',
  styleUrls: ['./datamain.component.css']
})
export class DatamainComponent implements OnInit {
  url: string = "/assets/json/database.json"
  constructor(private http: HttpClient) { }
  datamain: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(rel1 => {
      this.datamain = rel1;

      console.log(this.datamain);

    });
  }

}
