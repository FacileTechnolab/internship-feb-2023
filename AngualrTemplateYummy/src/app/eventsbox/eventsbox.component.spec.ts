/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventsboxComponent } from './eventsbox.component';

describe('EventsboxComponent', () => {
  let component: EventsboxComponent;
  let fixture: ComponentFixture<EventsboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
