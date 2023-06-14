import { Component } from '@angular/core';
import { Employee } from 'src/app/model/Employee';

@Component({
  selector: 'app-modelc',
  templateUrl: './modelc.component.html',
  styleUrls: ['./modelc.component.css']
})
export class ModelcComponent {

  public employee:Employee={
    
    id:3,
    name:"shivangi",
    
    indian:true
  }
}
