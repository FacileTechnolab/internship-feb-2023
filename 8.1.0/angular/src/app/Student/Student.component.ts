import { ViewStudentComponent } from './ViewStudent/ViewStudent.component';
import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { GetStudentOutput, GetStudentOutputPagedResultDto, StudentServiceServiceProxy, UpdateStudentInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { CreateStudentComponent } from './CreateStudent/CreateStudent.component';
import { EditStudentComponent } from './EditStudent/EditStudent.component';
import { finalize } from 'rxjs/operators';
class PagedRolesRequestDto extends PagedRequestDto {
  keyword: string;

}

@Component({
  selector: 'app-Student',
  templateUrl: './Student.component.html',
  styleUrls: ['./Student.component.css'],
  animations: [appModuleAnimation()]
})
export class StudentComponent extends PagedListingComponentBase<GetStudentOutput> {

  keyword = '';
  student: GetStudentOutput[] = [];
  constructor(
    injector: Injector,
    private _modalService: BsModalService,
    private _studentService: StudentServiceServiceProxy
  ) {
    super(injector);
  }
  protected list(request: PagedRolesRequestDto, pageNumber: number, finishedCallback: Function): void {
    request.keyword = this.keyword;
    this._studentService.getStudents(request.keyword, request.skipCount, 0, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: GetStudentOutputPagedResultDto) => {
        console.warn("STUDENT", result);

        this.student = result.items;

        this.showPaging(result, pageNumber);
      });

  }
  // protected delete(entity: GetStudentOutput): void {
  //   throw new Error('Method not implemented.');
  // }
  protected delete(role: GetStudentOutput): void {
    abp.message.confirm(
      this.l('RoleDeleteWarningMessage', role.courseName),
      undefined,
      (result: boolean) => {
        if (result) {
          this._studentService
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





  createStudent(): void {
    this.showCreateOrEditStudentDialog();
  }
  editStudent(role: UpdateStudentInput): void {
    this.showCreateOrEditStudentDialog(role.id);
  }
  viewStudent(role: UpdateStudentInput): void {
    this.showViewStudentDialog(role.id);
  }
  showViewStudentDialog(id?: number): void {
    let viewDialog: BsModalRef;
    viewDialog = this._modalService.show(
      ViewStudentComponent,
      {
        class: 'modal-lg',
        initialState: {
          id: id,

        },
      }
    );
  }
  showCreateOrEditStudentDialog(id?: number): void {
    let createOrEditstudentDialog: BsModalRef;
    if (!id) {
      createOrEditstudentDialog = this._modalService.show(
        CreateStudentComponent,
        {
          class: 'modal-lg',

        }
      );
    } else {
      createOrEditstudentDialog = this._modalService.show(
        EditStudentComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,

          },
        }
      );
    }
    createOrEditstudentDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }



}
