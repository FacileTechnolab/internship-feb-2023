import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() parentFunction:EventEmitter<any>=new EventEmitter()
   ngOnInit():void{
   
    this.parentFunction.emit('jahanvi')
   }

sendData(){
  let data={name:'jahanvi',age:25,email:'janvi@gmail.com',phone:546467} 
  this.parentFunction.emit(data)
}
}
