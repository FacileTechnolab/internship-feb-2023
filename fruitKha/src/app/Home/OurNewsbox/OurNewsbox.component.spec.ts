/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurNewsboxComponent } from './OurNewsbox.component';

describe('OurNewsboxComponent', () => {
  let component: OurNewsboxComponent;
  let fixture: ComponentFixture<OurNewsboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurNewsboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurNewsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
