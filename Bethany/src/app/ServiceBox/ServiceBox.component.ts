import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ServiceBox',
  templateUrl: './ServiceBox.component.html',
  styleUrls: ['./ServiceBox.component.css']
})
export class ServiceBoxComponent implements OnInit {
  url: string= "/assets/json/service.json"
  ser:any;
  @Input() value: any


  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    console.log("child", this.ser);    
  }

}
