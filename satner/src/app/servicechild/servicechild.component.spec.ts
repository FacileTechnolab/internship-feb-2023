/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServicechildComponent } from './servicechild.component';

describe('ServicechildComponent', () => {
  let component: ServicechildComponent;
  let fixture: ComponentFixture<ServicechildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicechildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
