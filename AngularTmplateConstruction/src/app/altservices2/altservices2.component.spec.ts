/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Altservices2Component } from './altservices2.component';

describe('Altservices2Component', () => {
  let component: Altservices2Component;
  let fixture: ComponentFixture<Altservices2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Altservices2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Altservices2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
