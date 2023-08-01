import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.component.html',
  styleUrls: ['./hometab.component.css']
})
export class HometabComponent implements OnInit {
  // tabdata:any;
 
  tabdata : string [] = ['Modisit', 'Praesenti', 'Explica', 'Nostrum'];
  url: string = "/assets/json/tab.json" ;
  activatedTabIndex: number = 0;
  sertabarry : any;
  constructor(private http: HttpClient) { 
  
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.sertabarry =result
    });
 console.log(this.sertabarry)
  }
  tabChange(tabIndex: number){
    debugger;
    this.activatedTabIndex = tabIndex;
  }
  }


