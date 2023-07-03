import {
  Component, OnInit, Injector,
  EventEmitter,
  Output
} from '@angular/core';
import { CourseServiceServiceProxy, CreateCourseInput } from '@shared/service-proxies/service-proxies';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-CreateCourseDialog',
  templateUrl: './CreateCourseDialog.component.html',
  styleUrls: ['./CreateCourseDialog.component.css']
})
export class CreateCourseDialogComponent implements OnInit {
  saving = false;
  courses = new CreateCourseInput();
  public _CourseService: CourseServiceServiceProxy
  course = new CreateCourseInput();
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
  @Output() onSave = new EventEmitter<any>();
  save(): void {
    this.saving = true;

    // this.course.roleNames = this.getCheckedRoles();

    this._CourseService.create(this.courses).subscribe(
      () => {
        //this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();
      },
      () => {
        this.saving = false;
      }
    );
  }
}
