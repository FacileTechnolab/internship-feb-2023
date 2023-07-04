import { CreateProjectsInput, Project } from './../../../shared/service-proxies/service-proxies';
import { Component, OnInit , Injector, Output, EventEmitter} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CreateUserDto, ProjectAppServicesServiceProxy } from '@shared/service-proxies/service-proxies';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  saving = false;
  Project = new CreateProjectsInput();
  checkedRolesMap: { [key: string]: boolean } = {};

  @Output() onSave = new EventEmitter<any>();


  constructor(
    injector: Injector,
    public bsModalRef: BsModalRef,
    public _CreateProject: ProjectAppServicesServiceProxy,

  ) { }

  ngOnInit() {}


  getCheckedRoles(): string[] {
    const roles: string[] = [];
    _forEach(this.checkedRolesMap, function (value, key) {
      if (value) {
        roles.push(key);
      }
    });
    return roles;
  }


  save(): void {
    this.saving = true;

    this.Project.name = this.getCheckedRoles();

    this._userService.create(this.Project).subscribe(
      () => {
        // this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();
      },
      () => {
        this.saving = false;
      }
    );
  }



}
