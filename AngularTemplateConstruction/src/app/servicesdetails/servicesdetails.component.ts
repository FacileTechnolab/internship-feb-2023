import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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


  constructor(private http:HttpClient) {
 
   }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.serdetaildata =result
    });
 console.log(this.serdetaildata)

 this.http.get(this.url1).subscribe(result=>{
       
  this.breaddata =result
});
console.log(this.breaddata)
  }


  


}
