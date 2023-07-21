/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GreenappleComponent } from './Greenapple.component';

describe('GreenappleComponent', () => {
  let component: GreenappleComponent;
  let fixture: ComponentFixture<GreenappleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenappleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenappleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
