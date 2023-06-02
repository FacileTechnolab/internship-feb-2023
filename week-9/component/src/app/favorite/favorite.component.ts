import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs:['isFavorite']
})
export class FavoriteComponent implements OnInit {
   @Input() isFavorite:boolean=true;
   @Output() change=new EventEmitter();
  // isSelected:boolean=true;
  // isFavorite:boolean=true ;
constructor(){} 
ngOnInit(){}
onClick(){
   this.isFavorite=!this.isFavorite;
   this.change.emit();
  // this.isSelected=!this.isSelected;
}
}
