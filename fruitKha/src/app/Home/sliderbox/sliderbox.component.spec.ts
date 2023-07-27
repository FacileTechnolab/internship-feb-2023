/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SliderboxComponent } from './sliderbox.component';

describe('SliderboxComponent', () => {
  let component: SliderboxComponent;
  let fixture: ComponentFixture<SliderboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
