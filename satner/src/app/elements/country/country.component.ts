import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  url: string = "/assets/json/city.json"
  constructor(private http: HttpClient) { }
  @Input() value: any;
  ngOnInit() {
    console.log(this.value);
  }

}
