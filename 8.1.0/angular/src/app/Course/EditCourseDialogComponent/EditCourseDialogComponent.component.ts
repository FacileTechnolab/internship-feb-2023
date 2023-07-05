import {
  Component,
  Injector,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CreateCourseDialogComponentComponent } from '../CreateCourseDialogComponent/CreateCourseDialogComponent.component';
import { CourseServiceServiceProxy, GetCourseOutput, UpdateCourseInput } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-EditCourseDialogComponent',
  templateUrl: './EditCourseDialogComponent.component.html',
  styleUrls: ['./EditCourseDialogComponent.component.css']
})
export class EditCourseDialogComponentComponent extends AppComponentBase implements OnInit {
  cour = new GetCourseOutput;
  saving = false;
  cour1 = new UpdateCourseInput();
  // :GetCourseOutput= new GetCourseOutput;
  constructor(public bsModalRef: BsModalRef, injector: Injector, public _courseservice: CourseServiceServiceProxy) {
    super(injector);
  }
  @Output() onSave = new EventEmitter<any>();
  id: number;

  ngOnInit() {
    this._courseservice
      .getCourseById(this.id)
      .subscribe((result: GetCourseOutput) => {
        this.cour = result;
      });
  }
  save(): void {
    this.saving = true;

    const courses = new GetCourseOutput();
    courses.init(this.cour);
    // role.grantedPermissions = this.getCheckedPermissions();

    this._courseservice
      .update(courses)
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
