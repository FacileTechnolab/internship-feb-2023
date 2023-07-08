import { AppComponentBase } from '@shared/app-component-base';
import { Component, OnInit, Injector } from '@angular/core';
import { GetProjectResourceOutput, ProjectAppResourceServiceProxy, UpdateProjectResourceInput } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-View-Resource',
  templateUrl: './View-Resource.component.html',
  styleUrls: ['./View-Resource.component.css']
})
export class ViewResourceComponent extends AppComponentBase implements OnInit {
  id:number;
  projres = new  UpdateProjectResourceInput  (); 
  constructor( 
    public bsModalRef: BsModalRef,
    public _CreateProjectRes: ProjectAppResourceServiceProxy,
    Injector: Injector,
    ) { 
      super(Injector)
    }
    

  ngOnInit() : void{
    this. _CreateProjectRes
      .getProjectResourceById(this.id)
      .subscribe((result: any) => {
        this.projres = result;
        // this.permissions = result.permissions;
        // this.grantedPermissionNames = result.grantedPermissionNames;
        // this.setInitialPermissionsStatus();
      });
  }

}
