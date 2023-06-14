import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-model-employee',
  template: `<div class="modal-header">
  <h4 class="modal-title">Hi there!</h4>
  <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
</div>
<div class="modal-body">
  <p>{{employee.id}}</p>
  <p>Hello, {{ employee.name}}!</p>
  <p>{{employee.indian}}</p>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
</div>`,
  styleUrls: ['./model-employee.component.css']
})
export class ModelEmployeeComponent {
  public employee:Employee={
    
    id:3,
    name:"shivangi",
    
    indian:true
  }
activeModal: any;
  constructor(private modalService: NgbModal) {}

	open() {
		const modalRef = this.modalService.open(ModelEmployeeComponent);
		modalRef.componentInstance.name = 'World';
	}
}
