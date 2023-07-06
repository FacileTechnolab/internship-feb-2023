import { Component, Injector, OnInit } from '@angular/core';
import { GetRestaurantOutput, RestaurantServiceProxy, RoleDto, UpdateRestaurantInput, UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-View-Restaurant',
  templateUrl: './View-Restaurant.component.html',
  styleUrls: ['./View-Restaurant.component.css']
})
export class ViewRestaurantComponent  extends AppComponentBase implements OnInit {
  id:number;

  restaurant = new GetRestaurantOutput();
  constructor(
    injector: Injector,
    private _restaurantService: RestaurantServiceProxy,
      private _modalService: BsModalService,
      public bsModalRef: BsModalRef
  ) {
    super(injector);
  }
  ngOnInit() {
    this._restaurantService
      .getRestaurantById(this.id)
      .subscribe((result: GetRestaurantOutput) => {
        this.  restaurant = result;
      });
  }

}
