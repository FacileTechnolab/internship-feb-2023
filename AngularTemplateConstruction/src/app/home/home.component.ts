import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url: string = "/assets/json/homeblogpost.json" ;
  homeblogdata: any;
  isdisplay:boolean;
  showHome:boolean
  constructor(private http:HttpClient) {
   
    console.log("home",this.isdisplay)
   }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.homeblogdata =result
    });
    console.log(this.homeblogdata)
  }
  getstarted(){
    document.getElementById("get-started")?.scrollIntoView({behavior: "smooth"});
  }

  qutform= new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    email: new FormControl('', [Validators.required ,Validators.email]),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),

  })
  collectData(){
    console.log(this.qutform.value)
  }
  get name(){
    return this.qutform.get('name')
  }
  get email(){
    return this.qutform.get('email')
  }
  get phone(){
    return this.qutform.get('phone')
  }
  get message(){
    return this.qutform.get('message')
  }
}
