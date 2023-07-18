import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookatable',
  templateUrl: './bookatable.component.html',
  styleUrls: ['./bookatable.component.css']
})
export class BookatableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmittable(data:NgForm) {
    console.warn(data);
    alert("success");
    
    }
}
