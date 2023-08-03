import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
  url: string = "/assets/json/projectdetailinfo.json";
  url1: string = "/assets/json/projectdetailsideinfo.json";
  url2:string= "/assets/json/breadcrumbs.json"
  breaddata: any;
  projectdetinfodata: any;

  projectdetails;
  projectdetailId;

  constructor(private http: HttpClient, private activatedRouter: ActivatedRoute) {
   
  }

  ngOnInit(): void {
    this.http.get(this.url2).subscribe(result=>{
       
      this.breaddata =result
   });
console.log(this.breaddata)


this.projectdetailId=this.activatedRouter.snapshot.paramMap.get('id');
this.projectdetails=this.projectdetinfodata.find(x => x.id == this.projectdetailId);
  }
}
