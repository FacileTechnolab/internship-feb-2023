import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css']
})
export class ContactComponent implements OnInit {
  url: string = "/assets/json/contact.json";
  cont: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(rel => {
      this.cont = rel;

      console.log(this.cont);
    })

  }

  onSubmit(value: NgForm) {
    console.log("formdata", value);
    alert("success");
  }

}
