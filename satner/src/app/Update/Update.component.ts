import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-Update',
  templateUrl: './Update.component.html',
  styleUrls: ['./Update.component.css']
})
export class UpdateComponent implements OnInit {
  url: string = "/assets/json/update.json";
  from: any;
  constructor(private http: HttpClient) { }
  subscribe = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })
  ngOnInit() {
    this.http.get(this.url).subscribe(result => {
      this.from = result
      // console.log(this.from);
    });

  }
  onSub() {
    console.log(this.subscribe.value);
  }
  get email() {
    return this.subscribe.get('email');

  }

}
