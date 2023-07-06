import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GetStudentOutput, StudentServiceServiceProxy, UpdateStudentInput } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-ViewStudent',
  templateUrl: './ViewStudent.component.html',
  styleUrls: ['./ViewStudent.component.css']
})
export class ViewStudentComponent extends AppComponentBase implements OnInit {
  id: number;
  stud = new UpdateStudentInput();
  constructor(public bsModalRef: BsModalRef, injector: Injector,
    public _studentservice: StudentServiceServiceProxy) {
    super(injector);
  }

  ngOnInit() {
    debugger
    this._studentservice.getStudentById(this.id).subscribe((result: any) => {
      this.stud = result
    });

  }
}
