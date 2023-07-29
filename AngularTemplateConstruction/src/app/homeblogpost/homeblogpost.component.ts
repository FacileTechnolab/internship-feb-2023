import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeblogpost',
  templateUrl: './homeblogpost.component.html',
  styleUrls: ['./homeblogpost.component.css']
})
export class HomeblogpostComponent implements OnInit {
  url: string = "/assets/json/homeblogpost.json" ;
  homeblogdata: any;
isdisplay:boolean;




  constructor(private http: HttpClient) {

    this.isdisplay=true;
   
    
   }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.homeblogdata =result
    });
 console.log(this.homeblogdata)



  }
  

}
