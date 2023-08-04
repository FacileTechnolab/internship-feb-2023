import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectdetailsideinfo',
  templateUrl: './projectdetailsideinfo.component.html',
  styleUrls: ['./projectdetailsideinfo.component.css']
})
export class ProjectdetailsideinfoComponent implements OnInit {
  url: string = "/assets/json/projectdetailsideinfo.json";
  projectdetsideinfodata: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{

      this.projectdetsideinfodata =result;
    });
    console.log("projectdetsideinfodata",this.projectdetsideinfodata)
  }

}
