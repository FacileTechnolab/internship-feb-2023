import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { GetOrderOutput, OrderServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ViewOrder',
  templateUrl: './ViewOrder.component.html',
  styleUrls: ['./ViewOrder.component.css']
})
export class ViewOrderComponent extends AppComponentBase implements OnInit {
  id:number;

  Order= new GetOrderOutput();
  constructor(
    injector: Injector,
    private _orderService: OrderServiceProxy,
    private _modalService: BsModalService,
    public bsModalRef: BsModalRef
  
  ) {
    super(injector);
  }
  ngOnInit() {
    this._orderService
      .getOrderById(this.id)
      .subscribe((result: GetOrderOutput) => {
        this.   Order = result;
      });
  }

}

