import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleboxleft',
  templateUrl: './singleboxleft.component.html',
  styleUrls: ['./singleboxleft.component.css']
})
export class SingleboxleftComponent implements OnInit {

  @Input () left :any
// url :string = "/assets/json/singleboxleft.json"
// 
//   constructor(private http: HttpClient) { }

//   ngOnInit() {
//     this.http.get(this.url).subscribe(res => {this.left = res; console.log(this.left); }  )
//   }
constructor (){}
ngOnInit() {
  console.log(this.left);
}
onsinglenews(){
  document.getElementById("main")?.scrollIntoView({behavior: 'smooth'})

}
}
