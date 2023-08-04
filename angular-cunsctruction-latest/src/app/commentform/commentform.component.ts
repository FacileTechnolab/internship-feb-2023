import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-commentform',
  templateUrl: './commentform.component.html',
  styleUrls: ['./commentform.component.css']
})
export class CommentformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  commentform= new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    email: new FormControl('', [Validators.required ,Validators.email]),
    website: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),

  })
  collectData(){
    console.log(this.commentform.value)
  }
  get name(){
    return this.commentform.get('name')
  }
  get email(){
    return this.commentform.get('email')
  }
  get website(){
    return this.commentform.get('website')
  }
  get comment(){
    return this.commentform.get('comment')
  }
}
