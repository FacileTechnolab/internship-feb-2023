import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { GetRestaurantOutput, RestaurantServiceProxy, RoleDto, UpdateRestaurantInput, UserServiceProxy } from '@shared/service-proxies/service-proxies';

import * as moment from 'moment';
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
restaurantDate: string;
openingTime :string;
closedTime :string;
date=new GetRestaurantOutput ;


 
constructor(
  injector: Injector,
  private _restaurantService: RestaurantServiceProxy,
    private _modalService: BsModalService,
    public bsModalRef: BsModalRef
) {
  super(injector);
}

@Output() onSave = new EventEmitter<any>();


ngOnInit(): void {
 
  this._restaurantService
    .getRestaurantById(this.id)
    .subscribe((result: GetRestaurantOutput) => {
      this.restaurant = result;
     // this.restaurantDate = moment(result.openingTime).format('dd/MM/yyyy HH:mm:ss');
      this.openingTime=result.openingTime.toISOString();
      this.closedTime=result.closedTime.toISOString();
    });
   
}







save(): void {
  this.saving = true;
 // this.restaurant.openingTime = moment(this.restaurantDate, 'dd/MM/yyyy HH:mm:ss');
  this.date.openingTime = moment(this.openingTime, 'HH:mm:ss')
  this.date.closedTime = moment(this.closedTime, 'HH:mm:ss')

  const restaurant = new GetRestaurantOutput();
  restaurant.init(this.restaurant);
  // role.grantedPermissions = this.getCheckedPermissions();
  

  this._restaurantService.update(restaurant).subscribe(
    () => {
      this.notify.info(this.l('SavedSuccessfully'));
      this.bsModalRef.hide();
      this.onSave.emit();
    },
    () => {
      this.saving = false;
    }
  );
}
}
