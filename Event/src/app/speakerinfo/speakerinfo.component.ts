import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-speakerinfo',
  templateUrl: './speakerinfo.component.html',
  styleUrls: ['./speakerinfo.component.css']
})
export class SpeakerinfoComponent {
"title"="Speaker Details";
"desc"="Praesentium ut qui possimus sapiente nulla.";

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
