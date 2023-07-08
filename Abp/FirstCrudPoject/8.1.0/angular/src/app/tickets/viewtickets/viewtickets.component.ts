import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { EventAppServicesServiceProxy, GetEventOutput, GetTicketOutput, TicketAppServicesServiceProxy, UpdateTicketInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-viewtickets',
  templateUrl: './viewtickets.component.html',
  styleUrls: ['./viewtickets.component.css']
})
export class ViewticketsComponent extends AppComponentBase
implements OnInit {
  tickets = new GetTicketOutput();
  eventfk = new GetEventOutput();
  events: GetEventOutput[] = [];
  id: number;
  constructor(
    injector: Injector,
    public _ticketsService: TicketAppServicesServiceProxy,
    public _eventsService: EventAppServicesServiceProxy,
    public bsModalRef: BsModalRef,
  ) { 
    super(injector);
  }

  ngOnInit() {
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

}
