/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurNewsComponent } from './OurNews.component';

describe('OurNewsComponent', () => {
  let component: OurNewsComponent;
  let fixture: ComponentFixture<OurNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
