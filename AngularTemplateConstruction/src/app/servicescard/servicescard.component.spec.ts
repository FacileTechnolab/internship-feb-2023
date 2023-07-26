/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServicescardComponent } from './servicescard.component';

describe('ServicescardComponent', () => {
  let component: ServicescardComponent;
  let fixture: ComponentFixture<ServicescardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicescardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicescardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
