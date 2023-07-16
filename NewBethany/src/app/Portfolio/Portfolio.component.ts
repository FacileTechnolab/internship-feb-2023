import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Portfolio',
  templateUrl: './Portfolio.component.html',
  styleUrls: ['./Portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
url:string="/assets/json/portfolio.json"

port: Observable<any> | undefined;
constructor(private http:HttpClient) { }

  ngOnInit() {
    this.port=this.http.get(this.url)
    // console.log(this.port)
   }
  
}
// onclick(id: any) {
  //   debugger
  //   this.router.navigate(['spekarinfo'], {
  //     queryParams: { id: id },
  //   });
  // }
