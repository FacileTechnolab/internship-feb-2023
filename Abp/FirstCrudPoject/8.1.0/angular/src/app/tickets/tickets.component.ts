import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { GetTicketOutput, TicketAppServicesServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { CreateticketsComponent } from './createtickets/createtickets.component';
import { EditticketsComponent } from './edittickets/edittickets.component';
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
  protected delete(entity: GetTicketOutput): void {
    throw new Error('Method not implemented.');
  }

  createTicket(): void {
    this.showCreateOrEditTicketDialog();
  }

  showCreateOrEditTicketDialog(id?: number): void {
    let createOrEditRoleDialog: BsModalRef;
    if (!id) {
      createOrEditRoleDialog = this._modalService.show(
        CreateticketsComponent
        ,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditRoleDialog = this._modalService.show(
        EditticketsComponent,
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
  // ngOnInit() {
  // }

}
