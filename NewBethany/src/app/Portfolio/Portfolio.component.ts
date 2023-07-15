import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-Portfolio',
  templateUrl: './Portfolio.component.html',
  styleUrls: ['./Portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
id:any
  constructor(private router: Router) { }

  ngOnInit() { }
  onclick(id: any) {
    debugger
    this.router.navigate(['spekarinfo'], {
      queryParams: { id: id },
    });
  }

}
