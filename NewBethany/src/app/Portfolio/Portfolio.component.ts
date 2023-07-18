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

tabs: string []=['ALL','APP','CARD','WEB']
activatedTabIndex: number =0;

constructor(private http:HttpClient) { }

  ngOnInit() {
    this.port=this.http.get(this.url)
    // console.log(this.port)
   }
   tabChange(tabIndex:number){
    this.activatedTabIndex = tabIndex;
   }
  
}
// onclick(id: any) {
//     debugger
//     this.router.navigate(['spekarinfo'], {
//       queryParams: { id: id },
//     });
//   }
