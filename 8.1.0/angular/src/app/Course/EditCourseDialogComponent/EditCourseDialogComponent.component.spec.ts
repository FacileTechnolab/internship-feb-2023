/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditCourseDialogComponentComponent } from './EditCourseDialogComponent.component';

describe('EditCourseDialogComponentComponent', () => {
  let component: EditCourseDialogComponentComponent;
  let fixture: ComponentFixture<EditCourseDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCourseDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
