/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HelpboxComponent } from './helpbox.component';

describe('HelpboxComponent', () => {
  let component: HelpboxComponent;
  let fixture: ComponentFixture<HelpboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
