/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServdetaillistlinkComponent } from './servdetaillistlink.component';

describe('ServdetaillistlinkComponent', () => {
  let component: ServdetaillistlinkComponent;
  let fixture: ComponentFixture<ServdetaillistlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServdetaillistlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServdetaillistlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
