import { Component, Injector, OnInit,EventEmitter } from '@angular/core';
import { CreateRestaurantComponent } from '@app/Restaurant/create-restaurant/Create-Restaurant/Create-Restaurant.component';
import { EditRestaurantComponent } from '@app/Restaurant/edit-restaurant/Edit-Restaurant/Edit-Restaurant.component';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { GetRestaurantOutput, GetRestaurantOutputPagedResultDto, RestaurantServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { appModuleAnimation } from '@shared/animations/routerTransition';
class PagedRolesRequestDto extends PagedRequestDto {
  keyword: string;
}

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent extends PagedListingComponentBase<GetRestaurantOutput> {
  protected delete(entity: GetRestaurantOutput): void {
    throw new Error('Method not implemented.');
  }
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
    this._Service.getRestaurants(request.keyword,0, request.skipCount, request.maxResultCount)
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
ViewRestaurant(): void {
  this.showCreateOrEditRestaurant();
}

editRestaurant(restaurant: GetRestaurantOutput): void {
  this.showCreateOrEditRestaurant(restaurant.id);
}
private showCreateOrEditRestaurant(id?: number): void {
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




  }
  // createOrEditRestaurant.content.onSave.subscribe(() => {
  //   this.refresh();
  // });
}