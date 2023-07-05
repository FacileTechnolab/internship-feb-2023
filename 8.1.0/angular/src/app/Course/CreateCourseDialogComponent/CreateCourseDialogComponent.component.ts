import {
  Component, Injector, OnInit, Output,
  EventEmitter
} from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CourseServiceServiceProxy, CreateCourseInput, GetCourseOutput } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-CreateCourseDialogComponent',
  templateUrl: './CreateCourseDialogComponent.component.html',
  styleUrls: ['./CreateCourseDialogComponent.component.css']
})
export class CreateCourseDialogComponentComponent extends AppComponentBase implements OnInit {

  constructor(
    public bsModalRef: BsModalRef,
    injector: Injector,
    public _courseservice: CourseServiceServiceProxy) {
    super(injector);
  }
  ngOnInit() { }
  id: number;
  saving = false;
  defaultCourseCheckedStatus = false;
  cour = new CreateCourseInput();

  @Output() onSave = new EventEmitter<any>();

  // save(): void {
  //   this.saving = true;
  //   this._courseservice.create(this.course)
  //   .subscribe(
  //     ()=>{
  //       this.notify.info(this.l('Saved Successfully'));
  //       this.bsModalRef.hide();
  //       this.onSave.emit();
  //     },
  //     ()=>{
  //       this.saving;
  //     }

  //   // isCourseChecked(normalizedName: string): boolean {
  //   //   // just return default role checked status
  //   //   // it's better to use a setting
  //   //   return this.defaultCourseCheckedStatus;
  //   // }

  //   }
  save(): void {
    this.saving = true;

    const courses = new CreateCourseInput();
    courses.init(this.cour);
    // role.grantedPermissions = this.getCheckedPermissions();

    this._courseservice
      .create(courses)
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




