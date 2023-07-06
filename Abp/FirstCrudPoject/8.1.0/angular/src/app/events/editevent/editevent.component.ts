import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { EventAppServicesServiceProxy, GetEventOutput, UpdateEventInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css']
})
export class EditeventComponent extends AppComponentBase
implements OnInit{
  id: number;
  saving = false;
  events = new UpdateEventInput();
  @Output() onSave = new EventEmitter<any>();
  constructor(
    injector: Injector,
    public _eventsService: EventAppServicesServiceProxy,
    public bsModalRef: BsModalRef,
  ) { 
    super(injector);
  }

  ngOnInit() : void {
    this._eventsService
    .getEventByID(this.id)
    .subscribe((result: GetEventOutput) => {
       this.events = result;
      // this.permissions = result.permissions;
      // this.grantedPermissionNames = result.grantedPermissionNames;
      // this.setInitialPermissionsStatus();
    });
  }


  save(): void {
    this.saving = true;

    const events = new GetEventOutput();
    events.init(this.events);
    // events.grantedPermissions = this.getCheckedPermissions();

    this._eventsService
      .update(events)
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
