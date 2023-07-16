import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfoliobox',
  templateUrl: './portfoliobox.component.html',
  styleUrls: ['./portfoliobox.component.css']
})
export class PortfolioboxComponent implements OnInit {
url:string="/assets/json/portfolio.json"
port:any
@Input () value:any

constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
    console.log("child", this.port);
  }

  onclick(id: any) {
   
    this.router.navigate(['portfolioinner'], {
      queryParams: { id: id },
    });
  }
}
