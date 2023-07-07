import { Component, OnInit, Injector, EventEmitter, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CourseServiceServiceProxy, CreateStudentInput, GetCourseOutput, GetStudentOutput, StudentServiceServiceProxy, UpdateStudentInput } from '@shared/service-proxies/service-proxies';
import * as moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-EditStudent',
  templateUrl: './EditStudent.component.html',
  styleUrls: ['./EditStudent.component.css']
})
export class EditStudentComponent extends AppComponentBase implements OnInit {
  @Output() onSave = new EventEmitter<any>();
  id: number;
  courcId: number;
  stu = new GetStudentOutput;
  cour = new GetCourseOutput;
  cource: GetCourseOutput[] = [];
  courseDate: string;


  constructor(public bsModalRef: BsModalRef,
    injector: Injector,
    private _modalService: BsModalService,
    private _studentService: StudentServiceServiceProxy,
    public _courseservice: CourseServiceServiceProxy
  ) {
    super(injector);
  }

  saving = false;


  ngOnInit() {
    this._courseservice.listAll().subscribe((result: GetCourseOutput[]) => {
      console.warn("STUDENT", result);
      this.cource = result;
    });

    this._studentService
      .getStudentById(this.id)
      .subscribe((result: GetStudentOutput) => {
        this.stu = result;

        this.courseDate = moment(result.dateOfBirth).format('YYYY-MM-DD');

        this._courseservice

          .getCourseById(result.courseId)
          .subscribe((result: GetCourseOutput) => {
            this.cour = result;
            this.stu.courseName = result.name

          });
      });
  }

  save(): void {

    this.saving = true;

    this.stu.dateOfBirth = moment(this.courseDate, 'YYYY-MM-DD')

    const students = new GetStudentOutput();
    students.init(this.stu);
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
