import { filter } from 'rxjs/operators';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GetProjectsOutput, GetRoleForEditOutput, ProjectAppServicesServiceProxy, UpdateProjectsInput } from './../../../shared/service-proxies/service-proxies';
import { Component, OnInit, Injector, Output, EventEmitter } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-Edit-project',
  templateUrl: './Edit-project.component.html'
  
})
export class EditProjectComponent extends  AppComponentBase implements OnInit {
  saving = false;
  id: number;

  proj = new UpdateProjectsInput ();
  @Output() onSave = new EventEmitter<any>();

  

  constructor(
    private _CreateProject: ProjectAppServicesServiceProxy,
    public bsModalRef: BsModalRef,
    Injector: Injector,
  ) { 
    super(Injector)
  }

  ngOnInit() : void{
    this._CreateProject
      .getProjectsById(this.id)
      .subscribe((result: GetProjectsOutput) => {
        this.proj = result;
        // this.permissions = result.permissions;
        // this.grantedPermissionNames = result.grantedPermissionNames;
        // this.setInitialPermissionsStatus();
      });
  }

  save(): void {
    this.saving = true;

    const project = new GetProjectsOutput();
    project.init(this.proj);
   // project.grantedPermissions = this.getCheckedPermissions();

    this._CreateProject
      .update(project)
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



