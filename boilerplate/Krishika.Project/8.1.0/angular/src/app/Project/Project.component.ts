import { finalize } from 'rxjs/operators';
import {  GetProjectsOutput, GetProjectsOutputPagedResultDto} from './../../shared/service-proxies/service-proxies';
import { Component, OnInit, Injector } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {  ProjectAppServicesServiceProxy } from '@shared/service-proxies/service-proxies';
import {
  PagedListingComponentBase,
  PagedRequestDto
} from 'shared/paged-listing-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { CreateProjectComponent } from './Create-project/Create-project.component';
import { EditProjectComponent } from './Edit-project/Edit-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';

class PagedResultRequestDto extends PagedRequestDto {
  keyword: string;
}

@Component({
  selector: 'app-Project',
  templateUrl: './Project.component.html',
  styleUrls: ['./Project.component.css'],
  animations: [appModuleAnimation()]
})
export class ProjectComponent extends PagedListingComponentBase<GetProjectsOutput> {
 
  
 
  proj:  GetProjectsOutput[] =[] ;
  advancedFiltersVisible = false;
  keyword = '';
  isActive: boolean | null; 
  maxResultCount: number;
  skipCount: number;

  constructor(
        injector: Injector,
        public _CreateProject: ProjectAppServicesServiceProxy,
        private _modalService: BsModalService
    
     ) {
      super(injector);
      }
 

  list(
    request: PagedResultRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;

    this._CreateProject
      .getProject(request.keyword,request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: GetProjectsOutputPagedResultDto) => {
        console.warn("Project", result);      
        this.proj = result.items;
        this.showPaging(result,pageNumber);
  
      });
  }

  delete(Project: GetProjectsOutput ): void {
    abp.message.confirm(
      this.l('ProjectDeleteWarningMessage', Project.name),
      undefined,
      (result: boolean) => {
        if (result) {
          this._CreateProject
            .delete(Project.id)
            .pipe(
              finalize(() => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
                this.refresh();
              })
            )
            .subscribe(() => {});
        }
      }
    );
  }



//  
// ngOnInit() {}

create(): void {
  this.showCreateOrEditProjectDialog();
}

edit(Project: GetProjectsOutput): void {
  this.showCreateOrEditProjectDialog(Project.id);
}

view(Project: GetProjectsOutput): void {
  this.showViewProjectDialog(Project.id);
}

showViewProjectDialog(id? :number):void{
   let viewDialog:BsModalRef;

 viewDialog = this._modalService.show(
  ViewProjectComponent,
  {
    class: 'modal-lg',
    initialState: {
      id: id,
    },
  }
);
}


showCreateOrEditProjectDialog(id?: number): void {
  let createOrEditProjectDialog: BsModalRef;
  if (!id) {
    createOrEditProjectDialog = this._modalService.show(
      CreateProjectComponent,
      {
        class: 'modal-lg',
      }
    );
  } else {
    createOrEditProjectDialog = this._modalService.show(
      EditProjectComponent,
      {
        class: 'modal-lg',
        initialState: {
          id: id,
        },
      }
    );
  }


  createOrEditProjectDialog.content.onSave.subscribe(() => {
    this.refresh();
  });
}
}

 


  
   


