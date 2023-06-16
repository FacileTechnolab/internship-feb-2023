import { Component , ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { UserlistComponent } from './userlist/userlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angualrloading';
  constructor(
    private vcr : ViewContainerRef,
    private cfr : ComponentFactoryResolver
  ){

  }
  async loadingAdmin()
  {
    this.vcr.clear();
    const{AdminlistComponent} =  await import('./adminlist/adminlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    )
  }
  async loadinguser()
  {
    this.vcr.clear();
    const{UserlistComponent} =  await import('./userlist/userlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }
}
