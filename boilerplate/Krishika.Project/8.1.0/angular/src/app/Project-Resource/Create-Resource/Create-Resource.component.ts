import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CreateProjectResourceInput, GetProjectResourceOutput, GetProjectsOutput, ProjectAppResourceServiceProxy, ProjectAppServicesServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-Create-Resource',
  templateUrl: './Create-Resource.component.html',
  
})
export class CreateResourceComponent extends AppComponentBase implements OnInit {
  proj:  GetProjectsOutput[] =[] ;
  id:number;
  saving= false;
  projres = new GetProjectResourceOutput();
  Project = new GetProjectsOutput();
  @Output() onSave = new EventEmitter<any>();




  constructor(
    injector: Injector,
    public bsModalRef: BsModalRef,
    public _CreateProjectRes: ProjectAppResourceServiceProxy,
    public _CreateProject: ProjectAppServicesServiceProxy) 

    {
    super(injector); 
    }
  ngOnInit() {
    this._CreateProject
    .listAll()
    .subscribe((result:  any) => {
       this.proj = result;
    });
  

  this._CreateProjectRes
  .getProjectResourceById(this.id)
  .subscribe((result: GetProjectResourceOutput) => {
    this.projres = result;
    
    this._CreateProject.getProjectsById(result.id)
      .subscribe((result: GetProjectsOutput) => {
        this.Project = result;
        this.projres.firstName = result.name
      });
  });
}

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
