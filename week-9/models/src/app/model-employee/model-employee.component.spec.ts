import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelEmployeeComponent } from './model-employee.component';

describe('ModelEmployeeComponent', () => {
  let component: ModelEmployeeComponent;
  let fixture: ComponentFixture<ModelEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelEmployeeComponent]
    });
    fixture = TestBed.createComponent(ModelEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
