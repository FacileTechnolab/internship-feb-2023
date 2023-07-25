import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.css']
})
export class FooterComponent implements OnInit {
  home:any;
  url:string="assets/jsondata/home.json";
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res=>{
      this.home=res;
    });
  }

}
