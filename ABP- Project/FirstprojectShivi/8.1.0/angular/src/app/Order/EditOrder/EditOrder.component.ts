import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { GetOrderOutput, GetRestaurantOutput, OrderServiceProxy, RestaurantServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-EditOrder',
  templateUrl: './EditOrder.component.html',
  styleUrls: ['./EditOrder.component.css']
})
export class EditOrderComponent extends AppComponentBase implements OnInit {
  id:number;
  saving = false;
  Order = new GetOrderOutput();
  restaurant: GetRestaurantOutput[] = [];
  
  restaurantfk = new GetRestaurantOutput;
  
  ngOnInit() {
    this._Service.listAll().subscribe((result: any) => {
      // console.warn("Order", result);
      this.restaurant = result;
    });

    this._orderService
      .getOrderById(this.id)
      .subscribe((result: GetOrderOutput) => {
        this.Order = result;
        this._Service
          .getRestaurantById(result.restaurantId)
          .subscribe((result: GetRestaurantOutput) => {
            this.restaurantfk = result;
            this.Order.restaurantName = result.name
          })
      });
  }

   
  constructor(
    injector: Injector,
    private _orderService: OrderServiceProxy,
    private _modalService: BsModalService,
    public bsModalRef: BsModalRef,
    private _Service: RestaurantServiceProxy
  
  ) {
    super(injector);
  }
  
  @Output() onSave = new EventEmitter<any>();
  
  
  
  
  
  
  
  
  
  
  save(): void {
    this.saving = true;
  
    const Order = new GetOrderOutput();
    Order.init(this.Order);
    // role.grantedPermissions = this.getCheckedPermissions();
  
    this._orderService.update(Order).subscribe(
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
