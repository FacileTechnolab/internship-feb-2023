
import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import {EventAppServicesServiceProxy, GetEventOutput, GetTicketOutput, TicketAppServicesServiceProxy, UpdateTicketInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edittickets',
  templateUrl: './edittickets.component.html',
  styleUrls: ['./edittickets.component.css']
})
export class EditticketsComponent extends AppComponentBase
implements OnInit {
  id:number;
  saving = false;
  tickets = new GetTicketOutput();
  eventfk = new GetEventOutput();
  events: GetEventOutput[] = [];


  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _ticketsService: TicketAppServicesServiceProxy,
    public _eventsService: EventAppServicesServiceProxy,
    public bsModalRef: BsModalRef,
  ) { 
    super(injector);
  }

  ngOnInit() {
    this._eventsService
    .listAll()
    .subscribe((result:  any) => {
       this.events = result;
      // this.permissions = result.permissions;
      // this.grantedPermissionNames = result.grantedPermissionNames;
      // this.setInitialPermissionsStatus();
    });

    this._ticketsService
    .getTicketById(this.id)
    .subscribe((result: GetTicketOutput) => {
       this.tickets = result;

       this._eventsService
       .getEventByID(result.eventId)
       .subscribe((result: GetEventOutput) => {
        this.eventfk = result;

  
        this.tickets.eventName = result.name
       })
    });

    



  }

  save(): void {
    this.saving = true;

    const tickets = new GetTicketOutput();
    tickets.init(this.tickets);
    // events.grantedPermissions = this.getCheckedPermissions();

    this._ticketsService
      .update(tickets)
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
