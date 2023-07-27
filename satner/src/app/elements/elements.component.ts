import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  url: string = "/assets/json/city.json";
  url1: string = "assets/json/breadcrumb.json";
  element: any;
  Fruit: any;
  constructor(private http: HttpClient) { }
  form = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    mname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),

  })
  ngOnInit() {
    this.http.get(this.url).subscribe(result => {
      this.element = result;

      //  console.log(this.element)
    });
    this.http.get(this.url1).subscribe(rel1 => {
      this.Fruit = rel1;
      //console.log(this.Fruit);

    });

  }
  onForm(form: any) {

    console.log(this.form.value);

  }
  get fname() {
    return this.form.get('fname');

  }
  get mname() {
    return this.form.get('mname');

  }
  get lname() {
    return this.form.get('lname');

  }
  get email() {
    return this.form.get('email');

  }


}

