import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Contactcome',
  templateUrl: './Contactcome.component.html',
  styleUrls: ['./Contactcome.component.css']
})
export class ContactcomeComponent implements OnInit {
  url: string ="assets/json/bread.json"
  crumb : any
  constructor( private http: HttpClient) { }

  ngOnInit() {

    this.http.get(this.url).subscribe(res=> {
      this.crumb=res
    })
  }

}
