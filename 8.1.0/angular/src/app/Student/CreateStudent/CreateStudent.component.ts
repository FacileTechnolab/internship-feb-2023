import { Component, OnInit, Injector, EventEmitter, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CourseServiceServiceProxy, CreateStudentInput, GetCourseOutput, GetStudentOutput, GetStudentOutputPagedResultDto, StudentServiceServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-CreateStudent',
  templateUrl: './CreateStudent.component.html',
  styleUrls: ['./CreateStudent.component.css']
})
export class CreateStudentComponent extends AppComponentBase implements OnInit {


  cource: GetCourseOutput[] = [];

  constructor(public bsModalRef: BsModalRef,
    public _studentservice: StudentServiceServiceProxy,
    private _courseService: CourseServiceServiceProxy,
    injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit() {
    this._courseService.listAll().subscribe((result: GetCourseOutput[]) => {
      console.warn("STUDENT", result);
      this.cource = result;
    });

  }
  stud = new CreateStudentInput();
  saving = false;
  id: number;
  @Output() onSave = new EventEmitter<any>();
  save(): void {
    this.saving = true;

    const students = new CreateStudentInput();
    students.init(this.stud);
    // role.grantedPermissions = this.getCheckedPermissions();

    this._studentservice
      .create(students)
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
