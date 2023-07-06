import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CreateEventInput, EventAppServicesServiceProxy, GetEventOutput } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent extends AppComponentBase
implements OnInit {
  saving = false;
  events = new GetEventOutput();
  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _eventsService: EventAppServicesServiceProxy,
    public bsModalRef: BsModalRef,
  ) {
    super(injector);
  }

  ngOnInit() {
  }


  save(): void {
    this.saving = true;

    const events = new CreateEventInput();
    events.init(this.events);
    // events.grantedPermissions = this.getCheckedPermissions();

    this._eventsService
      .create(events)
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
