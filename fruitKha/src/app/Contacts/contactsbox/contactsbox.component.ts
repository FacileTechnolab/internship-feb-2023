import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactsbox',
  templateUrl: './contactsbox.component.html',
  styleUrls: ['./contactsbox.component.css']
})
export class ContactsboxComponent implements OnInit {
url : string="assets/json/form.json"
form:any
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {this.form = res; console.log(this.form); })    
    
  }

}
