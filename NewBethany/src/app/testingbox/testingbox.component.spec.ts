/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestingboxComponent } from './testingbox.component';

describe('TestingboxComponent', () => {
  let component: TestingboxComponent;
  let fixture: ComponentFixture<TestingboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
