/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatecounterboxComponent } from './statecounterbox.component';

describe('StatecounterboxComponent', () => {
  let component: StatecounterboxComponent;
  let fixture: ComponentFixture<StatecounterboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatecounterboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatecounterboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
