import { CreateProjectResourceInput, Project } from './../../shared/service-proxies/service-proxies';

import { Component, OnInit, Injector } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/app-component-base';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { GetProjectResourceOutput, GetProjectResourceOutputPagedResultDto, ProjectAppResourceServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { CreateResourceComponent } from './Create-Resource/Create-Resource.component';
import { EditResourceComponent } from './edit-Resource/edit-Resource.component';

class PagedResultRequestDto extends PagedRequestDto {
  keyword: string;}

@Component({
  selector: 'app-Project-Resource',
  templateUrl: './Project-Resource.component.html',
  styleUrls: ['./Project-Resource.component.css'],
  animations: [appModuleAnimation()]
})
export class ProjectResourceComponent extends  PagedListingComponentBase<GetProjectResourceOutput>  {
  protected delete(entity: GetProjectResourceOutput): void {
    throw new Error('Method not implemented.');
  }

  keyword ='';
  projres : GetProjectResourceOutput[]=[];
  advancedFiltersVisible = false;

  constructor(
    injector: Injector,
    public _ProjectResource: ProjectAppResourceServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
   }



  protected list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
    request.keyword = this.keyword;
    this._ProjectResource

      .getProjectResource(request.keyword,request.skipCount,request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: GetProjectResourceOutputPagedResultDto) => {
        console.warn("ProjectResource", result);      
        this.projres = result.items;
        this.showPaging(result,pageNumber);
  
      });
     // ngOnInit() {}
  

  }
  create(): void {
    this.showCreateOrEditProjectResourceDialog();
    }
  showCreateOrEditProjectResourceDialog(id?: number): void {
    let CreateOrEditProjectResourceDialog: BsModalRef;
    if (!id) {
      CreateOrEditProjectResourceDialog = this._modalService.show(
        CreateResourceComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      CreateOrEditProjectResourceDialog = this._modalService.show(
        EditResourceComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }
  }
  
    edit(Project: GetProjectResourceOutput): void {
      //   this.showCreateOrEditProjectResourceDialog(Project.id);
      // }
      
      // view(Project: GetProjectResourceOutput): void {
      //   this.showViewProjectDialog(Project.id);
      // }
      
      // showCreateOrEditProjectResourceDialog(id? :number):void{
      //   let viewDialog:BsModalRef;
      
      // viewDialog = this._modalService.show(
      //  ViewProjectComponent,
      //  {
      //    class: 'modal-lg',
      //    initialState: {
      //      id: id,
      //    },
      //  }
      // );
      // }


}
}
