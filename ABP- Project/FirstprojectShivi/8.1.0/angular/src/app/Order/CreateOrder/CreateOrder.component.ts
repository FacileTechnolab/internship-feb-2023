import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CreateOrderInput, GetOrderOutput, OrderServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-CreateOrder',
  templateUrl: './CreateOrder.component.html',
  styleUrls: ['./CreateOrder.component.css']
})
export class CreateOrderComponent extends AppComponentBase
implements OnInit {
 
id:number;
keyword = '';
isActive: boolean | null;
saving = false;
 

constructor(
  injector: Injector,
  private _orderService: OrderServiceProxy,
  private _modalService: BsModalService,
  public bsModalRef: BsModalRef,
) {
  super(injector);
}
  ngOnInit(): void {
   
  }

Order = new GetOrderOutput();




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
   
    console.log(this.Order);


    const Order = new CreateOrderInput();
    Order.init(this.Order);
   // restaurant.grantedPermissions = this.getCheckedPermissions();

    this._orderService

      .create(Order)
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

