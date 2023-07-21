/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhyComponent } from './Why.component';

describe('WhyComponent', () => {
  let component: WhyComponent;
  let fixture: ComponentFixture<WhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
