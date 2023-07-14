import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewspeaker',
  templateUrl: './viewspeaker.component.html',
  styleUrls: ['./viewspeaker.component.css']
})
export class ViewspeakerComponent implements OnInit {

  "title" = "Speaker Details";
  "desc" = "Praesentium ut qui possimus sapiente nulla.";

  url: string = 'assets/json/speakerdetails.json';
  speakerinfo: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // fetch(this.url).then(res => res.json())
    //   .then(json => {
    //     this.speakersdetails = json;
    //     console.log("SPEAKERDETAILS", this.speakersdetails);
    //   })

    this.http.get(this.url).subscribe(res => {
      this.speakerinfo = res;

    });
  }

}
