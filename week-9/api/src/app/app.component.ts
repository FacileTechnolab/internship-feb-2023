import { UserlistComponent } from './userlist/userlist.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UsersService } from './users.service'
import { UsersDataService } from './services/users-data.service'
interface dataType {
  name: string,
  id: number,
  indian: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';
  getinfo() {
    const info: dataType = {
      name: 'jahanvi',
      id: 10,
      indian: true,
    }
    return info;
  }

  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }
  async loadAdmin() {
    this.vcr.clear();
    const { AdminlistComponent } = await import('./adminlist/adminlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    )
  }
  async loadUser() {
    this.vcr.clear();
    const { UserlistComponent } = await import('./userlist/userlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }



  // constructor(private user:UsersService)
  // {
  //   this.user.getData().subscribe(data=>{
  //     console.warn(data);
  //   })
  //users: any;
  // data: any = []
  // constructor(private userdata: UsersDataService) {
  //   this.userdata.users().subscribe((data) => {
  //     console.warn(data);
  //     this.data = data;
  //   })
  // }

}
