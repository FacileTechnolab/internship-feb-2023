/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Innermembership1Component } from './innermembership1.component';

describe('Innermembership1Component', () => {
  let component: Innermembership1Component;
  let fixture: ComponentFixture<Innermembership1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Innermembership1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Innermembership1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
