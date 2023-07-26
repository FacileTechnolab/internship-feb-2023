import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-servicechild',
  templateUrl: './servicechild.component.html',
  styleUrls: ['./servicechild.component.css']
})
export class ServicechildComponent implements OnInit {
  url: string = "/assets/json/service.json"
  constructor(private http: HttpClient) { }
  @Input() design: any


  ngOnInit() {



  }
}
