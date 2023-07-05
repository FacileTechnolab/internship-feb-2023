
import {
  Component,
  Injector,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CourseServiceServiceProxy, GetCourseOutput, UpdateCourseInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-ViewCourse',
  templateUrl: './ViewCourse.component.html',
  styleUrls: ['./ViewCourse.component.css']
})
export class ViewCourseComponent extends AppComponentBase implements OnInit {
  id: number;
  cour = new UpdateCourseInput();
  //cour = new GetCourseOutput;
  constructor(public bsModalRef: BsModalRef, injector: Injector, public _courseservice: CourseServiceServiceProxy) {
    super(injector);
  }

  ngOnInit() {
    this._courseservice
      .getCourseById(this.id)
      .subscribe((result: GetCourseOutput) => {
        this.cour = result;
      });
  }

}
