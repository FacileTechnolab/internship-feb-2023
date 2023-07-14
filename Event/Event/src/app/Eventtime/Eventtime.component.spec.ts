/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventtimeComponent } from './Eventtime.component';

describe('EventtimeComponent', () => {
  let component: EventtimeComponent;
  let fixture: ComponentFixture<EventtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
