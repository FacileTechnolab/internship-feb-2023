/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnerEventComponent } from './innerEvent.component';

describe('InnerEventComponent', () => {
  let component: InnerEventComponent;
  let fixture: ComponentFixture<InnerEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
