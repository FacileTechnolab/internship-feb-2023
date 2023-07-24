import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-symbolchild',
  templateUrl: './symbolchild.component.html',
  styleUrls: ['./symbolchild.component.css']
})
export class SymbolchildComponent implements OnInit {

  url: string = "/assets/json/database.json";
  constructor(private http: HttpClient) { }
  @Input() data: any;
  ngOnInit() {

    console.log(this.data);

  }
}
