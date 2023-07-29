import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
url: string="/assets/json/header.json"
url1:string="/assets/json/headermenu.json"
headermenuvalue: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url1).subscribe(result=>{
      this.headermenuvalue =result
    });
 console.log(this.headermenuvalue)
  }

}
