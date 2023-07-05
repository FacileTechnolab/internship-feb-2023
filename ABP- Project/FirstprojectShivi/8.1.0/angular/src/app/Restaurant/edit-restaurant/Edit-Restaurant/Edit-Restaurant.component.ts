import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { GetRestaurantOutput, RestaurantServiceProxy, RoleDto, UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-Edit-Restaurant',
  templateUrl: './Edit-Restaurant.component.html',
  styleUrls: ['./Edit-Restaurant.component.css']
})
export class EditRestaurantComponent extends AppComponentBase implements OnInit {
id:number;
saving = false;
restaurant = new GetRestaurantOutput();
roles: RoleDto[] = [];
checkedRolesMap: { [key: string]: boolean } = {};

constructor(
  injector: Injector,
  private _restaurantService: RestaurantServiceProxy,
    private _modalService: BsModalService
) {
  super(injector);
}

  ngOnInit() {
    id:Number;
  }

}
