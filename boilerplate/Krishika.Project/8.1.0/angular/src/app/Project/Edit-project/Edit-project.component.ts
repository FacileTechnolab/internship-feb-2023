import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { filter } from 'rxjs/operators';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GetProjectsOutput, GetRoleForEditOutput, ProjectAppServicesServiceProxy, UpdateProjectsInput } from './../../../shared/service-proxies/service-proxies';
import { Component, OnInit, Injector, Output, EventEmitter } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import * as moment from 'moment';

@Component({
  selector: 'app-Edit-project',
  templateUrl: './Edit-project.component.html'
  
})
export class EditProjectComponent extends  AppComponentBase implements OnInit {
  saving = false;
  id: number;
  date = new GetProjectsOutput;
  startDate: string;
  endDate: string;
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
      
        //this.Date=moment(result.startDate).format('YYYY-DD-MM');
        // this.startDate=moment(result.startDate).format('DD-MM-yyyy');
        // this.endDate=moment(result.endDate).format('DD-MM-yyyy');
           this.startDate=result.startDate.toISOString();
        this.endDate=result.endDate.toISOString();
      });
  }
 
  save(): void {
    this.saving = true;
    this.date.startDate = moment(this.startDate, 'MM-dd-yyyy')
    this.date.endDate = moment(this.endDate, 'MM-dd-yyyy')
    const project = new GetProjectsOutput();
    project.init(this.date);
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



