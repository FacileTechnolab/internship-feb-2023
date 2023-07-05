import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { CreateRestaurantComponent } from './create-restaurant/Create-Restaurant/Create-Restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/Edit-Restaurant/Edit-Restaurant.component';
import { GetRestaurantOutput, GetRestaurantOutputPagedResultDto, RestaurantServiceProxy } from '@shared/service-proxies/service-proxies';
import {
  PagedListingComponentBase,
  PagedRequestDto
} from 'shared/paged-listing-component-base';
import { finalize } from 'rxjs/operators';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '@shared/animations/routerTransition';

class PagedResultRequestDto extends PagedRequestDto {
 
}
@Component({
  selector: 'app-Restaurant',
  templateUrl: './Restaurant.component.html',
  styleUrls: ['./Restaurant.component.css'],
  animations: [appModuleAnimation()]
})
export class RestaurantComponent  {
  // protected list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
  //   throw new Error('Method not implemented.');

  // }
  // extends PagedListingComponentBase<GetRestaurantOutput>
  // protected delete(entity: GetRestaurantOutput): void {
  //   throw new Error('Method not implemented.');
  // }
//   protected list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
//         this._restaurantService
//       .getRestaurants('',0, request.skipCount, request.maxResultCount)
//       .pipe(
//         finalize(() => {
//           finishedCallback();
//         })
//       )
//       .subscribe((result:GetRestaurantOutputPagedResultDto) => {
//         this.restaurant = result.items;
//         this.showPaging(result, pageNumber);
//       });
//   }
//   protected delete(entity: GetRestaurantOutput): void {
  
//   }

 
//   keyword = '';
 
//   restaurant: GetRestaurantOutput[] = [];

 
 
//   constructor(
//     injector: Injector,
//     private _restaurantService: RestaurantServiceProxy,
//     private _modalService: BsModalService
//   ) {
//     super(injector);
//   }
// //  protected list(
// //     request: PagedResultRequestDto,
// //     pageNumber: number,
// //     finishedCallback: Function
// //   ): void {
// //     request.keyword = this.keyword;

// //     this._restaurantService
// //       .getRestaurants(request.keyword,0, request.skipCount, request.maxResultCount)
// //       .pipe(
// //         finalize(() => {
// //           finishedCallback();
// //         })
// //       )
// //       .subscribe((result:GetRestaurantOutputPagedResultDto) => {
// //         this.restaurant = result.items;
// //         this.showPaging(result, pageNumber);
// //       });
// //   }
//   @Output() onSave = new EventEmitter<any>();

//   createRestaurant(): void {
//     //this.showCreateOrEditRestaurant();
//   }
//   ViewRestaurant(): void {
//     //this.showCreateOrEditRestaurant();
//   }

//   editRestaurant(restaurant: GetRestaurantOutput): void {
//     //this.showCreateOrEditRestaurant(restaurant.id);
//   }
 

//   // private showCreateOrEditRestaurant(id?: number): void {
//   //   let createOrEditRestaurant: BsModalRef;
//   //   if (!id) {
//   //     createOrEditRestaurant = this._modalService.show(
//   //       CreateRestaurantComponent,
//   //       {
//   //         class: 'modal-lg',
//   //       }
//   //     );
//   //   } else {
//   //     createOrEditRestaurant = this._modalService.show(
//   //       EditRestaurantComponent,
//   //       {
//   //         class: 'modal-lg',
//   //         initialState: {
//   //           id: id,
//   //         },
//   //       }
//   //     );
//   //   }




//   // }
//   clearFilters(): void {
//     this.keyword = '';
//     // this.isActive = undefined;
//     this.getDataPage(1);
//   }
//   getDataPage(arg0: number) {
    
//   }

}



