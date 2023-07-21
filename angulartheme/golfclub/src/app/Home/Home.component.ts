import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
// title="Welcome to the club";
// data=[{
//   A: "Modern",
//    b:"Creative",
//    c:"Lifestyle"
//  }];
//  show="Our Story";
// member="Become a member";



value:any;

  url: string = '/assets/static/data.json';
 
constructor(private http: HttpClient) {
  
}

ngOnInit() {
  this.http.get(this.url).subscribe(res => {
    this.value = res;
   // console.log(this.value);
  });
  
  




}

}
