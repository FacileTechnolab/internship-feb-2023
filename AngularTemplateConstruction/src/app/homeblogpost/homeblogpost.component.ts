import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homeblogpost',
  templateUrl: './homeblogpost.component.html',
  styleUrls: ['./homeblogpost.component.css']
})
export class HomeblogpostComponent implements OnInit {
  url: string = "/assets/json/homeblogpost.json" ;
  homeblogdata: any;
  isdisplay:boolean;
  showHome:boolean


  page:number=1;
 
  itemperpage:number= 6;

  constructor(private http: HttpClient , private router: Router) {
    if(this.router.url === '/'){
      this.isdisplay=false;
    }else{
      this.isdisplay=true;
    }
   }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.homeblogdata =result
      
    });
 console.log(this.homeblogdata)

  }
}
