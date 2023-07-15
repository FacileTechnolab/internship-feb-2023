import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clientbox',
  templateUrl: './clientbox.component.html',
  styleUrls: ['./clientbox.component.css']
})
export class ClientboxComponent implements OnInit {
url: string= "/assets/json/client.json"
client: any;
@Input () value:any

  constructor(private http:HttpClient) { }

  ngOnInit() {
    console.log("child", this.client);
  }

}
