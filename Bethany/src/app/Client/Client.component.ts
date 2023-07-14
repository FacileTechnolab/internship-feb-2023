import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-Client',
  templateUrl: './Client.component.html',
  styleUrls: ['./Client.component.css']
})
export class ClientComponent implements OnInit {
url :string="assets/json/service.json"
client: any
@Input () value: any

constructor( private http:HttpClient) { }

  ngOnInit() { 
    this.client=this.http.get(this.url)
    console.log(this.client)
    }

}

