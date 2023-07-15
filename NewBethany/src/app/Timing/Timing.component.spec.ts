/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimingComponent } from './Timing.component';

describe('TimingComponent', () => {
  let component: TimingComponent;
  let fixture: ComponentFixture<TimingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
