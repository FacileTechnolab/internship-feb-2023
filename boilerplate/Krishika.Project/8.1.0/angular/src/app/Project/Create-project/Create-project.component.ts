import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CreateProjectsInput, GetProjectsOutput,  ProjectAppServicesServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-Create-project',
  templateUrl: './Create-project.component.html',
  
})
export class CreateProjectComponent extends AppComponentBase implements OnInit{
  saving = false;
  proj = new GetProjectsOutput();

  @Output() onSave = new EventEmitter<any>();


  constructor(
    injector: Injector,
    public bsModalRef: BsModalRef,
    public _CreateProject: ProjectAppServicesServiceProxy) 
  {
    super(injector); 
   }

   ngOnInit() { }
  
  
  save(): void {
    this.saving = true;

    const project = new CreateProjectsInput();
    project.init(this.proj);
   // project.grantedPermissions = this.getCheckedPermissions();

    this._CreateProject
      .create(project)
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
