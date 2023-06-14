import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  @Output() parentFunction: EventEmitter<any> = new EventEmitter()
  constructor() {}


  ngOnInit(): void {
  }
  sendData()
  {
    let data={name:'Kashi', age:25}
    this.parentFunction.emit(data)
    
  }

}
