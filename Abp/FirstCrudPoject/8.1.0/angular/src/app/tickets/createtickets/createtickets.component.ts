import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CreateTicketInput, EventAppServicesServiceProxy, GetTicketOutput, TicketAppServicesServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-createtickets',
  templateUrl: './createtickets.component.html',
  styleUrls: ['./createtickets.component.css']
})
export class CreateticketsComponent extends AppComponentBase
implements OnInit {
  tickets=  new GetTicketOutput();
  saving = false;
  constructor(
    injector: Injector,
    public _ticketsService: TicketAppServicesServiceProxy,
    public bsModalRef: BsModalRef,
  ) {
    super(injector);
  }
  @Output() onSave = new EventEmitter<any>();

  ngOnInit() {
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
