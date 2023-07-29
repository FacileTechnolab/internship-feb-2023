/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurprojectboxComponent } from './ourprojectbox.component';

describe('OurprojectboxComponent', () => {
  let component: OurprojectboxComponent;
  let fixture: ComponentFixture<OurprojectboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurprojectboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurprojectboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
