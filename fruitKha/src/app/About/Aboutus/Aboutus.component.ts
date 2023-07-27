import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Aboutus',
  templateUrl: './Aboutus.component.html',
  styleUrls: ['./Aboutus.component.css']
})
export class AboutusComponent implements OnInit {
crumb: any
url: string ="assets/json/bread.json"
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res=> {
      this.crumb=res
    })
  }

}
