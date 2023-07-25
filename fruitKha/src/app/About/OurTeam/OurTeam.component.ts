import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OurTeam',
  templateUrl: './OurTeam.component.html',
  styleUrls: ['./OurTeam.component.css']
})
export class OurTeamComponent implements OnInit {
url: string= "/assets/json/Ourteam.json"
boxes:any

constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {this.boxes= res ; console.log(this.boxes);})
  }

}
