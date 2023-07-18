import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Introduction',
  templateUrl: './Introduction.component.html',
  styleUrls: ['./Introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  url: string = "/assets/json/intro.json"
  constructor(private http: HttpClient) { }
  intro: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.intro = res;
      console.log(this.intro);
    })

  }
}
