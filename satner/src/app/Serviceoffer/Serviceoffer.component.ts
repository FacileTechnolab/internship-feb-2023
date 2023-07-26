import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-Serviceoffer',
  templateUrl: './Serviceoffer.component.html',
  styleUrls: ['./Serviceoffer.component.css']
})
export class ServiceofferComponent implements OnInit {
  url: string = "/assets/json/service.json"
  service: any;
  constructor(private http: HttpClient) { }
  title = "service offers";
  desc = " Is give may shall likeness made yielding spirit a itself togethcreated after sea <br />is in beast beginning signs open god you're gathering ithe"
  ngOnInit() {
    this.http.get(this.url).subscribe(result => {
      this.service = result

      // console.log(this.service)
    });
  }


}
