import { Component, Injector, OnInit } from '@angular/core';
;

import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { CourseServiceServiceProxy, GetCourseOutput, GetCourseOutputPagedResultDto, UpdateCourseInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { CreateCourseDialogComponentComponent } from './CreateCourseDialogComponent/CreateCourseDialogComponent.component';
import { EditCourseDialogComponentComponent } from './EditCourseDialogComponent/EditCourseDialogComponent.component';
import { ViewCourseComponent } from './ViewCourse/ViewCourse.component';
class PagedRolesRequestDto extends PagedRequestDto {
  keyword: string;
}
@Component({
  selector: 'app-Course',
  templateUrl: './Course.component.html',
  styleUrls: ['./Course.component.css'],
  animations: [appModuleAnimation()]
})
export class CourseComponent extends PagedListingComponentBase<GetCourseOutput> {
  constructor(
    injector: Injector,
    private _modalService: BsModalService,
    private _courseService: CourseServiceServiceProxy
  ) {
    super(injector);
  }
  protected delete(role: GetCourseOutput): void {
    abp.message.confirm(
      this.l('RoleDeleteWarningMessage', role.name),
      undefined,
      (result: boolean) => {
        if (result) {
          this._courseService
            .delete(role.id)
            .pipe(
              finalize(() => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
                this.refresh();
              })
            )
            .subscribe(() => { });
        }
      }
    );
  }
  keyword = '';
  course: GetCourseOutput[] = [];


  protected list(request: PagedRolesRequestDto, pageNumber: number, finishedCallback: Function): void {
    request.keyword = this.keyword;
    // this._courseService.getCourses(request.keyword, request.skipCount, request.maxResultCount)
    //   .pipe(
    //     finalize(() => {
    //       finishedCallback();
    //     })
    //   )
    //   .subscribe((result: any) => {
    //     console.warn("COURSES", result);
    //     this.course = result;

    //     this.showPaging(result, pageNumber);
    //   });

    this._courseService.getCourses(request.keyword, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: GetCourseOutputPagedResultDto) => {
        console.warn("COURSES", result);
        this.course = result.items;

        this.showPaging(result, pageNumber);
      });

  }




  createCourse(): void {
    this.showCreateOrEditCourseDialog();
  }
  editRole(role: UpdateCourseInput): void {
    this.showCreateOrEditCourseDialog(role.id);
  }
  viewRole(role: UpdateCourseInput): void {
    this.showViewCourseDialog(role.id);
  }
  showViewCourseDialog(id?: number): void {
    let viewDialog: BsModalRef;
    viewDialog = this._modalService.show(
      ViewCourseComponent,
      {
        class: 'modal-lg',
        initialState: {
          id: id,

        },
      }
    );
  }

  showCreateOrEditCourseDialog(id?: number): void {
    let createOrEditCourseDialog: BsModalRef;
    if (!id) {
      createOrEditCourseDialog = this._modalService.show(
        CreateCourseDialogComponentComponent,
        {
          class: 'modal-lg',

        }
      );
    } else {
      createOrEditCourseDialog = this._modalService.show(
        EditCourseDialogComponentComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,

          },
        }
      );
    }
    createOrEditCourseDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

}
