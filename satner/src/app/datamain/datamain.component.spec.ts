/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatamainComponent } from './datamain.component';

describe('DatamainComponent', () => {
  let component: DatamainComponent;
  let fixture: ComponentFixture<DatamainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
