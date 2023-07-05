
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
 
  protected delete(entity: GetProjectsOutput): void {
    throw new Error('Method not implemented.');
  }
 
  proj:  GetProjectsOutput[] =[] ;
  advancedFiltersVisible = false;
  keyword = '';
  isActive: boolean | null; 
  maxResultCount: number;
  skipCount: number;

  constructor(
        injector: Injector,
        public _CreateProject: ProjectAppServicesServiceProxy,
    
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
      .getProject(request.keyword, 0,request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: GetProjectsOutputPagedResultDto) => {
        this.proj = result.items;

        Lock
        this.showPaging(result, pageNumber);
      });
  }

  // delete(Project: GetProjectsOutput): void {
  //   abp.message.confirm(
  //     this.l('RoleDeleteWarningMessage', Project.displayName),
  //     undefined,
  //     (result: boolean) => {
  //       if (result) {
  //         this._CreateProject
  //           .delete(Project.id)
  //           .pipe(
  //             finalize(() => {
  //               abp.notify.success(this.l('SuccessfullyDeleted'));
  //               this.refresh();
  //             })
  //           )
  //           .subscribe(() => {});
  //       }
  //     }
  //   );
  // }



//  
// ngOnInit() {}

  
 


  
   
}

