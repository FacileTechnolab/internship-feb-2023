import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Help',
  templateUrl: './Help.component.html',
  styleUrls: ['./Help.component.css']
})
export class HelpComponent implements OnInit {
url: string="assets/json/help.json"
 help:any;

  constructor(private http : HttpClient  ) {   }

  ngOnInit() {
     this.http.get(this.url). subscribe(res => {this.help = res; console.log(this.help);}) 
   
  }

}
