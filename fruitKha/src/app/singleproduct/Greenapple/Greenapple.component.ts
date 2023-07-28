import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Greenapple',
  templateUrl: './Greenapple.component.html',
  styleUrls: ['./Greenapple.component.css']
})
export class GreenappleComponent implements OnInit {
apple:any
url: string ="assets/json/green.json"
constructor(private http:HttpClient) { }

ngOnInit() {
  this.http.get(this.url).subscribe(res =>{this.apple = res; console.log(this.apple);} )
}
}