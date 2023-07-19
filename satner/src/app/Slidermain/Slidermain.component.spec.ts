/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlidermainComponent } from './Slidermain.component';

describe('SlidermainComponent', () => {
  let component: SlidermainComponent;
  let fixture: ComponentFixture<SlidermainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidermainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
