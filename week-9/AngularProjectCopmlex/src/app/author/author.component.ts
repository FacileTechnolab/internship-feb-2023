import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  @Output() formParent: EventEmitter<any> = new EventEmitter() 

  sendData(){
    let info = {
      name: 'Dhruvil',
      age : 21
    }
    this.formParent.emit(info)
  }
}
