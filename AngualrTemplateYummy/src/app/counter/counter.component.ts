import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  countervalue: Array<any>;
  constructor(private http: HttpClient) {
    this.countervalue = [
      {
        countertitle: 'Clients'
      },
      {
        countertitle: 'Projects'
      },
      {
        countertitle: 'Hours Of Support'
      },
      {
        countertitle: 'Workers'
      },
    ]
   }


  ngOnInit() {
    console.log(this.countervalue)
  }


}
