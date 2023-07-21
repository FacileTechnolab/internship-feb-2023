/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Innermembeership2Component } from './innermembeership2.component';

describe('Innermembeership2Component', () => {
  let component: Innermembeership2Component;
  let fixture: ComponentFixture<Innermembeership2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Innermembeership2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Innermembeership2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
