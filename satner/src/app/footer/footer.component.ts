import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  url: string = "/assets/json/footer.json"
  constructor(private http: HttpClient) { }
  foot: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(rel => {
      this.foot = rel;
    });

  }
}
