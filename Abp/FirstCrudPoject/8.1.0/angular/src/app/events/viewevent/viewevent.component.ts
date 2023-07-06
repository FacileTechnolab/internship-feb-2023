import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { EventAppServicesServiceProxy, GetEventOutput, UpdateEventInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class VieweventComponent extends AppComponentBase
implements OnInit {
  events = new UpdateEventInput();
  id: number;
  constructor(
    injector: Injector,
    public _eventsService: EventAppServicesServiceProxy,
    public bsModalRef: BsModalRef,
  ) { 
    super(injector);
  }

  ngOnInit() {
    this._eventsService
    .getEventByID(this.id)
    .subscribe((result: GetEventOutput) => {
       this.events = result;
      // this.permissions = result.permissions;
      // this.grantedPermissionNames = result.grantedPermissionNames;
      // this.setInitialPermissionsStatus();
    });
  }

}
