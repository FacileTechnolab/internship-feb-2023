import { Component, OnInit, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CourseServiceServiceProxy, UserDto } from '@shared/service-proxies/service-proxies';
import { FormsModule, FormGroup } from '@angular/forms';
import { CreateCourseDialogComponent } from './CreateCourseDialog/CreateCourseDialog.component';
import { EditCourseDialogComponentComponent } from './EditCourseDialogComponent/EditCourseDialogComponent.component';
@Component({
  selector: 'app-Course',
  templateUrl: './Course.component.html',
  styleUrls: ['./Course.component.css']
})
export class CourseComponent implements OnInit {
  keyword = '';
  refresh: any;
  cour: CourseServiceServiceProxy[] = [];
  isActive: boolean | null;
  advancedFiltersVisible = false;

  constructor(private _modalService: BsModalService) { }
  ngOnInit() {
  }
  createCourse(): void {
    this.showCreateOrEditCourseDialog();
  }
  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }
  getDataPage(args: any) {

  }
  // editUser(course:CourseServiceServiceProxy): void {
  //   this.showCreateOrEditCourseDialog(course.id);
  // }
  private showCreateOrEditCourseDialog(id?: number): void {
    let createOrEditCourseDialog: BsModalRef;
    if (!id) {
      createOrEditCourseDialog = this._modalService.show(
        CreateCourseDialogComponent,
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