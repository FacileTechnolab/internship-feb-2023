import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foodchild',
  templateUrl: './foodchild.component.html',
  styleUrls: ['./foodchild.component.css']
})
export class FoodchildComponent implements OnInit {
  url: string = "/assets/json/food.json"
  constructor(private http: HttpClient) { }
  @Input() food: any;
  ngOnInit() {
    console.log(this.food);

  }

}
