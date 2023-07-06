import { Component, EventEmitter, OnInit, Output, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { GetProjectsOutput, ProjectAppServicesServiceProxy, UpdateProjectsInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  
})
export class ViewProjectComponent  extends  AppComponentBase  implements OnInit {

id: number;
proj = new UpdateProjectsInput();


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

 

}
