import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symbolmain',
  templateUrl: './symbolmain.component.html',
  styleUrls: ['./symbolmain.component.css']
})
export class SymbolmainComponent implements OnInit {

  url: string = "/assets/json/database.json"
  constructor(private http: HttpClient) { }
  datamain: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(rel => {
      this.datamain = rel;

      console.log(this.datamain);

    });
  }

}
