import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css']
})
export class ContactComponent implements OnInit {


  "title" = "Contact Us";
  "desc" = "Nihil officia ut sint molestiae tenetur.";
  contactdetails: any;
  url: string = '/assets/json/contactdetails.json';
  constructor(private http: HttpClient) { }
  name: string | undefined;
  email: string | undefined;
  msg: string | undefined;
  sub: string | undefined;

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.contactdetails = res;
      console.log('contactdetails', this.contactdetails)
    });

  }

  onSubmit(data: any) {
    console.warn(data);
    alert("success");

  }

}
