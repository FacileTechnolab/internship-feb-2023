import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicesdetails',
  templateUrl: './servicesdetails.component.html',
  styleUrls: ['./servicesdetails.component.css']
})
export class ServicesdetailsComponent implements OnInit {
  url1:string= "/assets/json/breadcrumbs.json"
  breaddata: any;
  url: string = "/assets/json/servicesdetails.json"
  serdetaildata: any;
  servicesdetails;
  servicesdetailId
 
  constructor(private http:HttpClient, private activatedRouter: ActivatedRoute ) {
 
   }

  ngOnInit() : void{
    this.http.get(this.url).subscribe(result=>{
      this.serdetaildata =result
    });
 console.log(this.serdetaildata)

 this.http.get(this.url1).subscribe(result=>{
       
  this.breaddata =result
});
console.log(this.breaddata)


this.servicesdetailId=this.activatedRouter.snapshot.paramMap.get('id');
this.servicesdetails=this.serdetaildata.find(x => x.id == this.servicesdetailId);
  }


  


}
