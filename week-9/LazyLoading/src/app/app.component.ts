import { AdminlistComponent } from './adminlist/adminlist.component';
declare var require: any;
import { Component,ViewContainerRef,ComponentFactoryResolver} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LazyLoading';
  constructor(private vcr:ViewContainerRef,
    private cfr:ComponentFactoryResolver){

  }
 async loadAdmin(){
this.vcr.clear();
const{AdminlistComponent}=await import('./adminlist/adminlist.component'); 
  }
  loadUser(){

  }
}
