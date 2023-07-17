import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  speakerinfo: any;

  constructor(private http: HttpClient, private router: Router) { }

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

  onclick(id: any) {

    this.router.navigate(['spekarinfo'], {
      queryParams: { id: id },
    });
  }
}
