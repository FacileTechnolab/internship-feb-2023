/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TreadingComponent } from './Treading.component';

describe('TreadingComponent', () => {
  let component: TreadingComponent;
  let fixture: ComponentFixture<TreadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
