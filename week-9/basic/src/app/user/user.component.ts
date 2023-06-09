import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
@Input() hero;
// @Output() parentFunction:EventEmitter<any>=new EventEmitter()
ngOnInit():void{
  console.warn(this.hero)
  // let parent={name}
  // this.parentFunction.emit("hello,Good Morning")
}
}
