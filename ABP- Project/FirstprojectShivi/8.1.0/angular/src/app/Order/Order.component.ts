import { Component, Injector, OnInit } from '@angular/core';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { GetOrderOutput, OrderServiceProxy, RestaurantServiceProxy, UpdateOrderInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { ViewOrderComponent } from './ViewOrder/ViewOrder.component';
import { CreateOrderComponent } from './CreateOrder/CreateOrder.component';
import { EditOrderComponent } from './EditOrder/EditOrder.component';
import { appModuleAnimation } from '@shared/animations/routerTransition';
class PagedRolesRequestDto extends PagedRequestDto {
  keyword: string;
}

@Component({
  selector: 'app-Order',
  templateUrl: './Order.component.html',
  styleUrls: ['./Order.component.css'],
  animations: [appModuleAnimation()]
})
export class OrderComponent extends PagedListingComponentBase<GetOrderOutput> {
 

  keyword='';
 Order: GetOrderOutput[] = [];
  
  constructor(
    injector: Injector,
    private _orderService: OrderServiceProxy,
    private _modalService: BsModalService,
  
  ) {
    super(injector);
  }
  protected list(request: PagedRolesRequestDto, pageNumber: number, finishedCallback: Function): void {
    request.keyword = this.keyword;
    this._orderService.getOrder(request.keyword, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: any) => {
        console.warn("Order", result);
        this.Order = result.items;
      
        this.showPaging(result, pageNumber);
      });

     

  

}
CreateOrder(): void {
  this.showCreateOrEditOrder();
}
ViewOrder( Order: UpdateOrderInput): void {
  this.showViewOrderDialog( Order.id);
}
showViewOrderDialog(id?: number): void {
  let viewDialog: BsModalRef;
  viewDialog = this._modalService.show(
    ViewOrderComponent,
    {
      class: 'modal-lg',
      initialState: {
        id: id,

      },
    }
  );
}
EditOrder(Order: GetOrderOutput): void {
  this.showCreateOrEditOrder(Order.id);
}
showCreateOrEditOrder(id?: number): void {
    let createOrEditOrder: BsModalRef;
    if (!id) {
      createOrEditOrder = this._modalService.show(
        CreateOrderComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditOrder= this._modalService.show(
        EditOrderComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

 createOrEditOrder.content.onSave.subscribe(() => {
    this.refresh();
  });


  }

 delete(  Order: GetOrderOutput): void {
    abp.message.confirm(
      this.l('Are you sure you want to delete Order?',   Order.id),
      undefined,
      (result: boolean) => {
        if (result) {
          this._orderService
            .delete(  Order.id)
            .pipe(
              finalize(() => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
                this.refresh();
              })
            )
            .subscribe(() => {});
        }
      }
    );
  }
}
