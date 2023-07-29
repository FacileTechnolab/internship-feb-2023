import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeblogbox',
  templateUrl: './homeblogbox.component.html',
  styleUrls: ['./homeblogbox.component.css']
})
export class HomeblogboxComponent implements OnInit {
  url: string = "/assets/json/homeblogpost.json" ;
  @Input() homeblogvalue: any;
 
  @Input() isdisplay:boolean;

  ngOnInit() {
    console.log(this.isdisplay)
  }
  value(){
    
  }

}
