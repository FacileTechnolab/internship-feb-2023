import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.component.html',
  styleUrls: ['./hometab.component.css']
})
export class HometabComponent implements OnInit {
  tabdata:any;
  url: string = "/assets/json/tab.json" ;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.tabdata =result
    });
 console.log(this.tabdata)
  }
  }


