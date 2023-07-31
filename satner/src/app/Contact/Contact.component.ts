import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css']
})
export class ContactComponent implements OnInit {
  url: string = "/assets/json/contact.json";
  url1: string = "assets/json/breadcrumb.json";
  cont: any;
  contact = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    sub: new FormControl(''),
    msg: new FormControl('')
  })
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(rel => {
      this.cont = rel;

      //console.log(this.cont);
    })
    this.http.get(this.url1).subscribe(rel1 => {
      this.Fruit = rel1;
      console.log(this.Fruit);

    });
  }

  Fruit: any;


  // onSubmit(value: NgForm) {
  //   console.log("formdata", value);
  //   alert("success");
  // }
  onContact() {
    console.log(this.contact.value);

  }
  get name() {
    return this.contact.get('name');

  }
  get email() {
    return this.contact.get('email');

  }

}
