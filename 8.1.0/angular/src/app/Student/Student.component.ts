import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { CourseServiceServiceProxy, GetCourseOutput, GetStudentOutput, StudentServiceServiceProxy, UpdateStudentInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateStudentComponent } from './CreateStudent/CreateStudent.component';
import { EditStudentComponent } from './EditStudent/EditStudent.component';
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
  protected list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
    throw new Error('Method not implemented.');
  }
  protected delete(entity: GetStudentOutput): void {
    throw new Error('Method not implemented.');
  }

  constructor(
    injector: Injector,
    private _modalService: BsModalService,
    private _studentService: StudentServiceServiceProxy
  ) {
    super(injector);
  }

  student: GetStudentOutput[] = [];
  keyword = '';

  ngOnInit() {
  }

  createStudent(): void {
    this.showCreateOrEditStudentDialog();
  }
  editStudent(role: UpdateStudentInput): void {
    this.showCreateOrEditStudentDialog(role.id);
  }
  viewStudent(role: UpdateStudentInput): void {
    this.showCreateOrEditStudentDialog(role.id);
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
  }
}
