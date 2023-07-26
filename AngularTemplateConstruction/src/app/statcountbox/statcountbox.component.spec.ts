/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatcountboxComponent } from './statcountbox.component';

describe('StatcountboxComponent', () => {
  let component: StatcountboxComponent;
  let fixture: ComponentFixture<StatcountboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatcountboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatcountboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
