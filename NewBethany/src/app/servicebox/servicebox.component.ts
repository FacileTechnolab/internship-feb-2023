import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicebox',
  templateUrl: './servicebox.component.html',
  styleUrls: ['./servicebox.component.css']
})
export class ServiceboxComponent implements OnInit {

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
