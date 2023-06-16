import { AdminlistComponent } from './adminlist/adminlist.component';
declare var require: any;
import { Component,ViewContainerRef,ComponentFactoryResolver} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
onSubmit(data:any) {
console.warn(data);

}
  title = 'LazyLoading';
  constructor(private vcr:ViewContainerRef,
    private cfr:ComponentFactoryResolver){

  }
 async loadAdmin(){
this.vcr.clear();
const{AdminlistComponent}=await import('./adminlist/adminlist.component'); 
this.vcr.createComponent(this.cfr.resolveComponentFactory(AdminlistComponent))
  }
   async loadUser(){
    this.vcr.clear();
    const{UserlistComponent}=await import('./userlist/userlist.component'); 
    this.vcr.createComponent(this.cfr.resolveComponentFactory(UserlistComponent))
  }
}
