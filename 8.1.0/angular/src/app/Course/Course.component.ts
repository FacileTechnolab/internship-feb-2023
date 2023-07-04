import { Component, Injector, OnInit } from '@angular/core';
import { CreateRoleDialogComponent } from '@app/roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from '@app/roles/edit-role/edit-role-dialog.component';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { CourseServiceServiceProxy, GetCourseOutput, GetCourseOutputPagedResultDto, UpdateCourseInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { CreateCourseDialogComponentComponent } from './CreateCourseDialogComponent/CreateCourseDialogComponent.component';
import { EditCourseDialogComponentComponent } from './EditCourseDialogComponent/EditCourseDialogComponent.component';
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
  keyword = '';
  course: GetCourseOutput[] = [];
  protected list(request: PagedRolesRequestDto, pageNumber: number, finishedCallback: Function): void {
    request.keyword = this.keyword;
    this._courseService.getCourses(request.keyword, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: any) => {
        console.warn("COURSES", result);
        this.course = result;

        this.showPaging(result, pageNumber);
      });

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
  protected delete(roles: GetCourseOutput): void {

    throw new Error('Method not implemented.');
  }



  constructor(
    injector: Injector,
    private _modalService: BsModalService,
    private _courseService: CourseServiceServiceProxy
  ) {
    super(injector);
  }
  createRole(): void {
    this.showCreateOrEditCourseDialog();
  }
  editRole(role: UpdateCourseInput): void {
    this.showCreateOrEditCourseDialog(role.id);
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
