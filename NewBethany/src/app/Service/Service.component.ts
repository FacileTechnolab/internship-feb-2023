import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Service',
  templateUrl: './Service.component.html',
  styleUrls: ['./Service.component.css']
})
export class ServiceComponent implements OnInit {

  url: string= "/assets/json/service.json"
  ser:any;
  @Input() value: any
  
constructor(
      public http:HttpClient
    ) { }
  
    ngOnInit() {
      this.ser=this.http.get(this.url)
      console.log(this.ser)
    }
}
