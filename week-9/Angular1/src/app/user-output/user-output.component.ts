import { Component,OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-output',
  templateUrl: './user-output.component.html',
  styleUrls: ['./user-output.component.css']
})
export class UserOutputComponent {
@Output() parentFunction:EventEmitter<any>=new EventEmitter()
ngOnInit():void{
  let data={name:'shivangi',sername:'shah'}
this.parentFunction.emit(data);
}
sentdata()
{
  let data={name:'shivangi',sername:'shah',age:25,emailid:'shivangi123@gmail.com'}
  this.parentFunction.emit(data);
}
}
