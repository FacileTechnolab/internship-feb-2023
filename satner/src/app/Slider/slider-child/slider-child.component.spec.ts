/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SliderChildComponent } from './slider-child.component';

describe('SliderChildComponent', () => {
  let component: SliderChildComponent;
  let fixture: ComponentFixture<SliderChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
