/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatscounterComponent } from './statscounter.component';

describe('StatscounterComponent', () => {
  let component: StatscounterComponent;
  let fixture: ComponentFixture<StatscounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatscounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatscounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
