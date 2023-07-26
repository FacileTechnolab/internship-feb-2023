import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-projectdetailinfo',
  templateUrl: './projectdetailinfo.component.html',
  styleUrls: ['./projectdetailinfo.component.css']
})
export class ProjectdetailinfoComponent implements OnInit {
   url: string = "/assets/json/projectdetailinfo.json"
    projectdetinfodata: any;
  constructor(private http: HttpClient) { 
  
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{

      this.projectdetinfodata =result;
    });
    console.log("projectdetailinfo",this.projectdetinfodata)
 
   
  }

}
