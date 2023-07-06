import { Component, Injector, OnInit,EventEmitter } from '@angular/core';
import { CreateRestaurantComponent } from '@app/Restaurant/create-restaurant/Create-Restaurant/Create-Restaurant.component';
import { EditRestaurantComponent } from '@app/Restaurant/edit-restaurant/Edit-Restaurant/Edit-Restaurant.component';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { GetRestaurantOutput, GetRestaurantOutputPagedResultDto, RestaurantServiceProxy, UpdateRestaurantInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { ViewRestaurantComponent } from '@app/Restaurant/View-Restaurant/View-Restaurant.component';
class PagedRolesRequestDto extends PagedRequestDto {
  keyword: string;
}

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent extends PagedListingComponentBase<GetRestaurantOutput> {

  keyword='';
  restaurant: GetRestaurantOutput[] = [];
  
  constructor(
    injector: Injector,
    private _Service: RestaurantServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
  }
  protected list(request: PagedRolesRequestDto, pageNumber: number, finishedCallback: Function): void {
    request.keyword = this.keyword;
    this._Service.getRestaurants(request.keyword, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: any) => {
        console.warn("Restaurant", result);
        this.restaurant = result.items;
      
        this.showPaging(result, pageNumber);
      });

     

  

}
createRestaurant(): void {
  this.showCreateOrEditRestaurant();
}
ViewRestaurant( restaurant: UpdateRestaurantInput): void {
  this.showViewRestaurantDialog( restaurant.id);
}
showViewRestaurantDialog(id?: number): void {
  let viewDialog: BsModalRef;
  viewDialog = this._modalService.show(
    ViewRestaurantComponent,
    {
      class: 'modal-lg',
      initialState: {
        id: id,

      },
    }
  );
}


editRestaurant(restaurant: GetRestaurantOutput): void {
  this.showCreateOrEditRestaurant(restaurant.id);
}
showCreateOrEditRestaurant(id?: number): void {
    let createOrEditRestaurant: BsModalRef;
    if (!id) {
      createOrEditRestaurant = this._modalService.show(
        CreateRestaurantComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditRestaurant = this._modalService.show(
        EditRestaurantComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

 createOrEditRestaurant.content.onSave.subscribe(() => {
    this.refresh();
  });


  }

 delete(  restaurant: GetRestaurantOutput): void {
    abp.message.confirm(
      this.l('Are you sure you want to delete Restaurant?',   restaurant.id),
      undefined,
      (result: boolean) => {
        if (result) {
          this._Service
            .delete(  restaurant.id)
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