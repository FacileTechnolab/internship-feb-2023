/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Altserbox2Component } from './altserbox2.component';

describe('Altserbox2Component', () => {
  let component: Altserbox2Component;
  let fixture: ComponentFixture<Altserbox2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Altserbox2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Altserbox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
