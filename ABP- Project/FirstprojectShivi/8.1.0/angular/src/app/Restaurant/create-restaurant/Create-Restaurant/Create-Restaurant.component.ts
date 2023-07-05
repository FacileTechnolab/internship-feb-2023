import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CreateRestaurantInput, GetRestaurantOutput, RestaurantServiceProxy, } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { forEach as _forEach, map as _map } from 'lodash-es';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-Create-Restaurant',
  templateUrl: './Create-Restaurant.component.html',
  styleUrls: ['./Create-Restaurant.component.css']
})
export class CreateRestaurantComponent  extends AppComponentBase implements OnInit {
  items: GetRestaurantOutput[] | undefined;
id:number;
keyword = '';
isActive: boolean | null;
advancedFiltersVisible = false;
restaurant = new CreateRestaurantInput();
roles: GetRestaurantOutput[] = [];
checkedRolesMap: { [key: string]: boolean } = {};
defaultRoleCheckedStatus = false;

  saving: boolean;
 name:string;

constructor(
  injector: Injector,
  public _restaurantService: RestaurantServiceProxy,
  public bsModalRef: BsModalRef,
private calendar: NgbCalendar
) {
  super(injector);
}

ngOnInit(): void {
  // this.restaurant.isActive = true;

  this. _restaurantService.listAll().subscribe((result) => {
    // this.roles = result.items;
    this.setInitialRolesStatus();
  });
}
setInitialRolesStatus(): void {
  _map(this.roles, (item:GetRestaurantOutput) => {
    // this.checkedRolesMap[item.GetRestaurantOutput.name] = this.isRoleChecked(
    //   item.name
    // );
  });
}
onRoleChange(role: GetRestaurantOutput, $event) {
  this.checkedRolesMap[role.name] = $event.target.checked;
}
isRoleChecked(name: string): boolean {
  // just return default role checked status
  // it's better to use a setting
  return this.defaultRoleCheckedStatus;
}
save(): void {
  this.saving = true;

 // this.restaurant.GetRestaurantOutput = this.getCheckedRoles();

  this._restaurantService.create(this.restaurant).subscribe(
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
  getCheckedRoles(): any {
   
  }
  model: NgbDateStruct;
	date: { year: number; month: number };


	selectToday() {
		this.model = this.calendar.getToday();
	}
  @Output() onSave = new EventEmitter<any>();
  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
  getDataPage(arg0: number) {

  }
}
