import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CreateTicketInput, EventAppServicesServiceProxy, GetEventOutput, GetEventOutputPagedResultDto, GetTicketOutput, TicketAppServicesServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { empty } from 'rxjs';

@Component({
  selector: 'app-createtickets',
  templateUrl: './createtickets.component.html',
  styleUrls: ['./createtickets.component.css']
})
export class CreateticketsComponent extends AppComponentBase
implements OnInit {
  tickets=  new GetTicketOutput();
  events: GetEventOutput[] = [];
  saving = false;
  constructor(
    injector: Injector,
    public _ticketsService: TicketAppServicesServiceProxy,
    public _eventsService: EventAppServicesServiceProxy,
    public bsModalRef: BsModalRef,
  ) {
    super(injector);
  }
  @Output() onSave = new EventEmitter<any>();




  ngOnInit() {

    // this._eventsService
    // .getEvent("", 0 ,0)
    // .subscribe((result:  GetEventOutputPagedResultDto) => {
    //    this.events = result.items;
    //   // this.permissions = result.permissions;
    //   // this.grantedPermissionNames = result.grantedPermissionNames;
    //   // this.setInitialPermissionsStatus();
    // });

    this._eventsService
    .listAll()
    .subscribe((result:  any) => {
       this.events = result;
      // this.permissions = result.permissions;
      // this.grantedPermissionNames = result.grantedPermissionNames;
      // this.setInitialPermissionsStatus();
    });

  }
  save(): void {
    this.saving = true;

    const tickets = new CreateTicketInput();
    tickets.init(this.tickets);
    // events.grantedPermissions = this.getCheckedPermissions();

    this._ticketsService
      .create(tickets)
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
