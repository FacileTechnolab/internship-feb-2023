import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-Speakers',
  templateUrl: './Speakers.component.html',
  styleUrls: ['./Speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  title = "Event Speakers"
  desc = "Here are some of our speakers"

  tit = 'speakerdetails';
  speakersdetails: any;
  url: string = 'assets/json/speakerdetails.json';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // fetch(this.url).then(res => res.json())
    //   .then(json => {
    //     this.speakersdetails = json;
    //     console.log("SPEAKERDETAILS", this.speakersdetails);
    //   })

    this.http.get(this.url).subscribe(res => {
      this.speakersdetails = res;

    });
  }

}
