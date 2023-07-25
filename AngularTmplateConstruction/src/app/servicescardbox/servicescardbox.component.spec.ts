/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServicescardboxComponent } from './servicescardbox.component';

describe('ServicescardboxComponent', () => {
  let component: ServicescardboxComponent;
  let fixture: ComponentFixture<ServicescardboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicescardboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicescardboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
