import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counterpart',
  templateUrl: './counterpart.component.html',
  styleUrls: ['./counterpart.component.css']
})
export class CounterpartComponent implements OnInit {

  counterarray: Array<any>;
  
  @Input() value: any;
  countervalue: any;
 constructor(private http: HttpClient) {
  this.counterarray = [
    {
        counterend: 234
    },
    {
      counterend: 500
    },
    {
      counterend: 570
    },
    {
      counterend: 600
    }
  ]
  }

 ngOnInit() {

     console.log('child', this.countervalue);
 }

}
