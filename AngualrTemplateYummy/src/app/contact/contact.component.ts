import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacttitle= 'CONTACT'
  contactsubtitle1 = 'Need Help?'
  contactsubtitle2 = 'Contact Us'
  mapimg='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621'
  // url:string= "/assets/json/contactdata.json" ;
  contactdata: Observable<any> | undefined;
  constructor( private router: Router) { }

  ngOnInit() {
    // this.contactdata = this.http.get(this.url);
    console.log(this.contactdata)
  }
  onSubmit(data:NgForm) {
    console.warn(data);
    data.reset();
    alert("success");
    
    }
 
}
