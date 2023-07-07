import { Component, Injector, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { EventAppServicesServiceProxy, GetEventOutput } from '@shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';
import { CreateeventComponent } from './createevent/createevent.component';
import { EditeventComponent } from './editevent/editevent.component';
import { VieweventComponent } from './viewevent/viewevent.component';
import { appModuleAnimation } from '@shared/animations/routerTransition';
class PagedResultRequestDto extends PagedRequestDto {
  keyword: string;
}
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  animations: [appModuleAnimation()]
})
export class EventsComponent extends PagedListingComponentBase<GetEventOutput> {
  
  events: GetEventOutput[] = [];
  keyword = '';
 

  constructor(
    injector: Injector,
    private _eventsService: EventAppServicesServiceProxy,
    private _modalService: BsModalService,
  ) {
    super(injector);
  }


  protected list(request: PagedResultRequestDto, pageNumber: number, finishedCallback: Function): void {
    request.keyword = this.keyword;

      this._eventsService
        .getEvent(request.keyword, request.skipCount, request.maxResultCount)
        .pipe(
          finalize(() => {
            finishedCallback();
          })
        )
        .subscribe((result: any) => {
          this.events= result.items;
          console.log("sdkfjaf", result);
          this.showPaging(result,pageNumber);
        });
  }
  protected delete(event: GetEventOutput): void {
    abp.message.confirm(
      this.l('RoleDeleteWarningMessage', event.name),
      undefined,
      (result: boolean) => {
        if (result) {
          this._eventsService
            .delete(event.id)
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
  
  createEvent(): void {
    this.showCreateOrEditEventDialog();
  }

  editEvent(events: GetEventOutput): void {
    debugger
    this.showCreateOrEditEventDialog(events.id);
  }
  viewEvent(events: GetEventOutput): void {
    debugger
    this.showViewDialog(events.id);
  }
  showViewDialog(id?: number): void {
    let viewEvent: BsModalRef;{
      viewEvent = this._modalService.show(
        VieweventComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }
  }
  showCreateOrEditEventDialog(id?: number): void {
    let createOrEditRoleDialog: BsModalRef;
    if (!id) {
      createOrEditRoleDialog = this._modalService.show(
        CreateeventComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditRoleDialog = this._modalService.show(
        EditeventComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditRoleDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

 

 

}


