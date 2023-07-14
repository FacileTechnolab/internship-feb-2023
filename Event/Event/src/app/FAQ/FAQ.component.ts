import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-FAQ',
  templateUrl: './FAQ.component.html',
  styleUrls: ['./FAQ.component.css']
})
export class FAQComponent implements OnInit {
  "title" = "F.A.Q";
  faqdetails: any;

  constructor(private http: HttpClient) { }
  "url": string = "/assets/json/faqdetails.json"

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.faqdetails = res;
      console.log('faqdetails', this.faqdetails)
    });
  }
}
