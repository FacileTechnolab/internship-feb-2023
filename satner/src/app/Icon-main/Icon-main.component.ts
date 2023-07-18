import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-Icon-main',
  templateUrl: './Icon-main.component.html',
  styleUrls: ['./Icon-main.component.css']
})
export class IconMainComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) { }
  url: string = "/assets/json/icon.json"
  ngOnInit() {

    this.http.get(this.url).subscribe(result => {
      this.data = result

      console.log(this.data)
    });
  }
  age = '10';
  des = "Years Experience Working";
  number = "call us now";
  desc = "(+1)-800-555-6789";
}
