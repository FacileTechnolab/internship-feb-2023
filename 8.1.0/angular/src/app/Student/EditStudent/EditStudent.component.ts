import { Component, OnInit, Injector, EventEmitter, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CreateStudentInput, GetCourseOutput, StudentServiceServiceProxy, UpdateStudentInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-EditStudent',
  templateUrl: './EditStudent.component.html',
  styleUrls: ['./EditStudent.component.css']
})
export class EditStudentComponent extends AppComponentBase implements OnInit {
  @Output() onSave = new EventEmitter<any>();
  id: number;
  constructor(public bsModalRef: BsModalRef,
    injector: Injector,
    private _modalService: BsModalService,
    private _studentService: StudentServiceServiceProxy
  ) {
    super(injector);
  }
  saving = false;
  cource: GetCourseOutput[] = [];
  stud = new CreateStudentInput();
  ngOnInit() {
  }
  save(): void {
    this.saving = true;

    const students = new UpdateStudentInput();
    students.init(this.stud);
    // role.grantedPermissions = this.getCheckedPermissions();
    this._studentService
      .update(students)
      .subscribe(
        () => {
          this.notify.info(this.l('SavedSuccessfully'));
          this.bsModalRef.hide();
          this.onSave.emit();
        },
        () => {
          this.saving = false;
        }
      );
  }
}
