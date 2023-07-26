import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-Icone',
  templateUrl: './Icone.component.html',
  styleUrls: ['./Icone.component.css']
})
export class IconeComponent implements OnInit {
  url: string = "/assets/json/icon.json"
  constructor(private http: HttpClient) { }

  @Input() iconic: any;
  ngOnInit() {




  }

}
