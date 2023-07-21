import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Membership',
  templateUrl: './Membership.component.html',
  styleUrls: ['./Membership.component.css']
})
export class MembershipComponent implements OnInit {
title="Membership at Tiya ";
label1="Membership Fees";
 
  url: string = '/assets/static/membership1.json';
  data: Observable<any> | undefined;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.data = this.http.get(this.url);
 
    console.log(this.data);
  }

}
