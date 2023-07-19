/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SliderchildComponent } from './sliderchild.component';

describe('SliderchildComponent', () => {
  let component: SliderchildComponent;
  let fixture: ComponentFixture<SliderchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
