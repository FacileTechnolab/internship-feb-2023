import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { GetRestaurantOutput, RestaurantServiceProxy, RoleDto, UpdateRestaurantInput, UserServiceProxy } from '@shared/service-proxies/service-proxies';
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
      // this.permissions = result.permissions;
      // this.grantedPermissionNames = result.grantedPermissionNames;
      // this.setInitialPermissionsStatus();
    });
}







save(): void {
  this.saving = true;

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
