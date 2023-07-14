import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ClientBox',
  templateUrl: './ClientBox.component.html',
  styleUrls: ['./ClientBox.component.css']
})
export class ClientBoxComponent implements OnInit {

  url :string="assets/json/service.json"
  client: any
  @Input () value: any
  
  constructor( private http:HttpClient) { }
  
    ngOnInit() { 
      console.log("child",this.client)
      }
  
  }

