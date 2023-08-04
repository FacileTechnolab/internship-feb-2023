import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlebox',
  templateUrl: './singlebox.component.html',
  styleUrls: ['./singlebox.component.css']
})
export class SingleboxComponent implements OnInit {
url: string ="assets/json/singleboxleft.json"
url1: string = "assets/json/singleboxdetail.json"


object :any
letter: any
singledetail
singledetailid;

  loginForm = new FormGroup({
    name : new FormControl ('', [Validators.required]),
    email: new FormControl ('', [Validators.required])
})
  constructor(private http: HttpClient,  private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {this.object = res;})
    this.http.get(this.url1).subscribe(res => {this.letter = res;})


  this.singledetailid=this.activatedroute.snapshot.paramMap.get('id');
  this.singledetail=this.letter.find(x=> x.id == this.singledetailid);

  }
  onSubmit() {
    console.warn(this.loginForm.value);
  }
  get name()
  {
     return this.loginForm.get('name');
  }

  get email()
  {
     return this.loginForm.get('email');
  }
}
