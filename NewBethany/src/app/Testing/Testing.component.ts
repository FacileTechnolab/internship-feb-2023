import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Testing',
  templateUrl: './Testing.component.html',
  styleUrls: ['./Testing.component.css']
})
export class TestingComponent implements OnInit {

  url:string= "/assets/json/testi.json"
  data: Observable<any> | undefined;

 
   constructor(private http: HttpClient) { }
 
   ngOnInit() {
     this.data=this.http.get(this.url)
     console.log(this.data)
   }

}
