import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-LastLayout',
  templateUrl: './LastLayout.component.html',
  styleUrls: ['./LastLayout.component.css']
})
export class LastLayoutComponent implements OnInit {
layout:any;
url:string="assets/jsondata/lastcontaine.json"
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res=>{
      this.layout=res;
    }
      );
  }
  onSubmit(userForm:any) {
    console.warn(userForm.value);
   
    userForm.reset();
    }
    


  contactform= new FormGroup({
    
    email: new FormControl('', [Validators.required ,Validators.email])


  })
  collectData(){
    console.log(this.contactform.value)
    this.contactform.reset();
  }
 
  get email(){
    return this.contactform.get('email')
  }

}
