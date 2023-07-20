/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogocarsoulComponent } from './logocarsoul.component';

describe('LogocarsoulComponent', () => {
  let component: LogocarsoulComponent;
  let fixture: ComponentFixture<LogocarsoulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogocarsoulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogocarsoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
