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
  url2:string= "/assets/json/breadcrumbs.json";
  url3: string="/assets/json/projectdetails.json"
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

this.http.get(this.url3).subscribe(result=>{
       
  this.projectdetinfodata =result
});
console.log(this.projectdetinfodata)

debugger
this.projectdetailId=this.activatedRouter.snapshot.paramMap.get('id');
debugger
this.projectdetails=this.projectdetinfodata.find(x => x.id == this.projectdetailId);
  }
}
