import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servdetaillistlink',
  templateUrl: './servdetaillistlink.component.html',
  styleUrls: ['./servdetaillistlink.component.css']
})
export class ServdetaillistlinkComponent implements OnInit {
  url:string = "/assets/json/servicesdetaillist.json";
  @Input () serdetaillistdata: any;
  constructor() { }

  ngOnInit() {
  }
  onclickserdetail(){
    document.getElementById("main")?.scrollIntoView({behavior: "smooth"});
     }
}
