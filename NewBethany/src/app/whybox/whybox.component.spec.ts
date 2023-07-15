/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhyboxComponent } from './whybox.component';

describe('WhyboxComponent', () => {
  let component: WhyboxComponent;
  let fixture: ComponentFixture<WhyboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
