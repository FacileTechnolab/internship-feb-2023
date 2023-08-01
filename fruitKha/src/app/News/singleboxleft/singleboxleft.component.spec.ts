/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SingleboxleftComponent } from './singleboxleft.component';

describe('SingleboxleftComponent', () => {
  let component: SingleboxleftComponent;
  let fixture: ComponentFixture<SingleboxleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleboxleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleboxleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
