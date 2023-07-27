/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestichildComponent } from './testichild.component';

describe('TestichildComponent', () => {
  let component: TestichildComponent;
  let fixture: ComponentFixture<TestichildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestichildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestichildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
