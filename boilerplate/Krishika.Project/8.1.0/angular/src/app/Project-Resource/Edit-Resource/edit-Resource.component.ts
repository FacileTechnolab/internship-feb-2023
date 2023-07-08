import { Component, EventEmitter, OnInit, Output,  Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { GetProjectResourceOutput, GetProjectsOutput, ProjectAppResourceServiceProxy, ProjectAppServicesServiceProxy, UpdateProjectResourceInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-Resource',
  templateUrl: './edit-Resource.component.html',
  styleUrls: ['./edit-Resource.component.css']
})
export class EditResourceComponent extends AppComponentBase implements OnInit {
  id: number;
 projres = new  GetProjectResourceOutput  ();
  
saving= false;
Project = new GetProjectsOutput();
proj:  GetProjectsOutput[] =[] ;
@Output() onSave = new EventEmitter<any>();


  constructor( 
     public bsModalRef: BsModalRef,
     public _CreateProjectRes: ProjectAppResourceServiceProxy,
     public _CreateProject: ProjectAppServicesServiceProxy,
     Injector: Injector,
     ) { 
       super(Injector)
     }
     

  ngOnInit() {
    this._CreateProject
    .listAll()
    .subscribe((result: GetProjectsOutput[]) => {
       this.proj = result;
    });

 
  this._CreateProjectRes
  .getProjectResourceById(this.id)
  .subscribe((result: GetProjectResourceOutput) => {
    this.projres = result;

  this._CreateProject
  
  .getProjectsById(result.projectId)
      .subscribe((result: GetProjectsOutput) => {
        this.Project = result;
        this.projres.projectName = result.name
      });
  });

}



  save(): void {
    this.saving = true;

    const project = new GetProjectResourceOutput();
    project.init(this.projres);
   // project.grantedPermissions = this.getCheckedPermissions();

    this. _CreateProjectRes
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
