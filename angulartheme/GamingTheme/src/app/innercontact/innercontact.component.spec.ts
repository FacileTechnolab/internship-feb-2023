/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnercontactComponent } from './innercontact.component';

describe('InnercontactComponent', () => {
  let component: InnercontactComponent;
  let fixture: ComponentFixture<InnercontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnercontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
