import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  url: string= "/assets/json/client.json"
  client: Observable<any> | undefined;
//  @Input () value:any

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.client=this.http.get(this.url)
   // console.log(this.client)
  }

}
