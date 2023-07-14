import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Team',
  templateUrl: './Team.component.html',
  styleUrls: ['./Team.component.css']
})
export class TeamComponent implements OnInit {
url:string="assets/json/teamdetails.json";
data:Observable<any> | undefined;
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.data=this.http.get(this.url)
    console.log(this.data)
  }

}
