import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodmain',
  templateUrl: './foodmain.component.html',
  styleUrls: ['./foodmain.component.css']
})
export class FoodmainComponent implements OnInit {
  url: string = "/assets/json/food.json"
  constructor(private http: HttpClient) { }
  foodchild: any;
  ngOnInit() {
    this.http.get(this.url).subscribe(rel => {
      this.foodchild = rel;

      console.log(this.foodchild);

    });
  }

}
