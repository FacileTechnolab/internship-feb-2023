import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counterpart',
  templateUrl: './counterpart.component.html',
  styleUrls: ['./counterpart.component.css']
})
export class CounterpartComponent implements OnInit {


  
  @Input() value: any;
  countervalue: any;
 constructor(private http: HttpClient) { }

 ngOnInit() {

     console.log('child', this.countervalue);
 }

}
