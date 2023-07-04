import { CreateProjectComponent } from './create-Project/create-Project.component';

import {  ProjectAppServicesServiceProxy,  } from './../../shared/service-proxies/service-proxies';
import { Component, OnInit, Injector } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EditProjectComponent } from './edit-project/edit-project.component';



@Component({
  selector: 'app-Project',
  templateUrl: './Project.component.html',
  styleUrls: ['./Project.component.css']
})
export class ProjectComponent implements OnInit {
  refresh: any;
  proj:  ProjectAppServicesServiceProxy[] =[] ;


  constructor(
    injector: Injector,
    private _CreateProject: ProjectAppServicesServiceProxy,
    private _modalService: BsModalService
  ) { }

  ngOnInit() {
    
  }
  CreateProjectsInput(): void {
    this.showCreateOrEditUserDialog();
  }
  private showCreateOrEditUserDialog(id?: number): void {
    let createOrEditUserDialog: BsModalRef;
    if (!id) {
      createOrEditUserDialog = this._modalService.show(
       CreateProjectComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditUserDialog = this._modalService.show(
        EditProjectComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditUserDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }
}
