import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CreateRestaurantInput, GetRestaurantOutput, RestaurantServiceProxy, } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { forEach as _forEach, map as _map } from 'lodash-es';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { appModuleAnimation } from '@shared/animations/routerTransition';
@Component({
  selector: 'app-Create-Restaurant',
  templateUrl: './Create-Restaurant.component.html',
  styleUrls: ['./Create-Restaurant.component.css'],
  animations: [appModuleAnimation()],
})
export class CreateRestaurantComponent  extends AppComponentBase
implements OnInit {
 
id:number;
keyword = '';
isActive: boolean | null;
saving = false;
 

constructor(
  injector: Injector,
  public _restaurantService: RestaurantServiceProxy,
  public bsModalRef: BsModalRef,
private calendar: NgbCalendar
) {
  super(injector);
}
  ngOnInit(): void {
   
  }

restaurant = new GetRestaurantOutput();




  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
  getDataPage(arg0: number) {

  }
  @Output() onSave = new EventEmitter<any>();
  save(): void {
    this.saving = true;
   
    console.log(this.restaurant);


    const restaurant = new CreateRestaurantInput();
    restaurant.init(this.restaurant);
   // restaurant.grantedPermissions = this.getCheckedPermissions();

    this._restaurantService

      .create(restaurant)
      .subscribe(
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
