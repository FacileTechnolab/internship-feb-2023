import { Component, OnInit, Injector } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { GetProjectResourceOutput, GetProjectResourceOutputPagedResultDto, ProjectAppResourceServiceProxy, UpdateProjectResourceInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { CreateResourceComponent } from './Create-Resource/Create-Resource.component';
import { EditResourceComponent } from './edit-Resource/edit-Resource.component';
import { ViewResourceComponent } from './View-Resource/View-Resource.component';

class PagedResultRequestDto extends PagedRequestDto {
  keyword: string;}

@Component({
  selector: 'app-Project-Resource',
  templateUrl: './Project-Resource.component.html',
  styleUrls: ['./Project-Resource.component.css'],
  animations: [appModuleAnimation()]
})
export class ProjectResourceComponent extends  PagedListingComponentBase<GetProjectResourceOutput>  {
  
  Id:number;
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



  protected list(request: PagedResultRequestDto, pageNumber: number, finishedCallback: Function): void {
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
    this.CreateOrEditProjectResourceDialog();
    }

    edit(Project: GetProjectResourceOutput): void {
      this.CreateOrEditProjectResourceDialog(Project.id);
    }
    CreateOrEditProjectResourceDialog(id?: number): void {
    let CreateOrEditProjectResourceDialog : BsModalRef;
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
    CreateOrEditProjectResourceDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  
  }
  
   
      
      view(Project: UpdateProjectResourceInput ): void {
        this.showViewProjectResourceDialog(Project.id);
      }
    showViewProjectResourceDialog(projectId: number) {
      let viewDialog:BsModalRef;
      
      viewDialog = this._modalService.show(
       ViewResourceComponent,
       {
         class: 'modal-lg',
         initialState: {
           id: projectId,
         },
       }
      );
    }
        
     

       delete(Project: GetProjectResourceOutput): void {
      abp.message.confirm(
          this.l('ProjectDeleteWarningMessage', Project.firstName),
          undefined,
          (result: boolean) => {
            if (result) {
              this._ProjectResource
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
}

