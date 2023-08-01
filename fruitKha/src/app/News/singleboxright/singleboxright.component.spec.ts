/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SingleboxrightComponent } from './singleboxright.component';

describe('SingleboxrightComponent', () => {
  let component: SingleboxrightComponent;
  let fixture: ComponentFixture<SingleboxrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleboxrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleboxrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
