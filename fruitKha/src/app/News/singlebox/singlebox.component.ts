import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singlebox',
  templateUrl: './singlebox.component.html',
  styleUrls: ['./singlebox.component.css']
})
export class SingleboxComponent implements OnInit {
url: string ="assets/json/singleboxleft.json"
object :any



  loginForm = new FormGroup({
    name : new FormControl ('', [Validators.required]),
    email: new FormControl ('', [Validators.required])
})
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {this.object = res;  }  )
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
