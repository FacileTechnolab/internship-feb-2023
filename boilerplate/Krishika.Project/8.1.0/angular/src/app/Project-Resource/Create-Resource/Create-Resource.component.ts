import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CreateProjectResourceInput, GetProjectResourceOutput, ProjectAppResourceServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-Create-Resource',
  templateUrl: './Create-Resource.component.html',
  
})
export class CreateResourceComponent extends AppComponentBase implements OnInit {

  saving= false;
  projres = new GetProjectResourceOutput();
  @Output() onSave = new EventEmitter<any>();




  constructor(
    injector: Injector,
    public bsModalRef: BsModalRef,
    public _CreateProjectRes: ProjectAppResourceServiceProxy)
    {
    super(injector); 
    }
  ngOnInit() {}

  save(): void {
    this.saving = true;

    const projectRes = new CreateProjectResourceInput();
    projectRes.init(this.projres);
   // project.grantedPermissions = this.getCheckedPermissions();

    this._CreateProjectRes
      .create(projectRes)
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
