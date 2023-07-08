import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { GetTicketOutput, TicketAppServicesServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { CreateticketsComponent } from './createtickets/createtickets.component';
import { EditticketsComponent } from './edittickets/edittickets.component';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';
class PagedResultRequestDto extends PagedRequestDto {
  keyword: string;
}
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  animations: [appModuleAnimation()]
})
export class TicketsComponent extends PagedListingComponentBase<GetTicketOutput>  {

  tickets: GetTicketOutput[] = [];
  keyword = '';

  constructor(
    injector: Injector,
    private _ticketsService: TicketAppServicesServiceProxy,
    private _modalService: BsModalService,
  ) {
    super(injector);
  }

  protected list(request: PagedResultRequestDto, pageNumber: number, finishedCallback: Function): void {
    request.keyword = this.keyword;

    this._ticketsService
      .getTicket(request.keyword, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: any) => {
        this.tickets= result.items;
        console.log("dskgldfhl", result);
      this.showPaging(result,pageNumber);
      });
  }
  protected delete(ticket: GetTicketOutput): void {
    abp.message.confirm(
      this.l('RoleDeleteWarningMessage', ticket.eventId),
      undefined,
      (result: boolean) => {
        if (result) {
          this._ticketsService
            .delete(ticket.id)
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

  createTicket(): void {
    this.showCreateOrEditTicketDialog();
  }

  editEvent(tickets: GetTicketOutput): void {
    debugger
    this.showCreateOrEditTicketDialog(tickets.id);
  }
  viewTicket(tickets: GetTicketOutput): void {
    debugger
    this.showViewDialog(tickets.id);
  }

  showViewDialog(id?: number) : void{
    let viewTicketDialog : BsModalRef;
    viewTicketDialog = this._modalService.show(
      ViewticketsComponent,
      {
        class: 'modal-lg',
        initialState:{
          id: id,
        }
      }
    );
  }



  showCreateOrEditTicketDialog(id?: number): void {
    let createOrEditTicketDialog: BsModalRef;
    if (!id) {
      createOrEditTicketDialog = this._modalService.show(
        CreateticketsComponent
        ,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditTicketDialog = this._modalService.show(
        EditticketsComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditTicketDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }
  // ngOnInit() {
  // }

}
