/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AltserviceboxComponent } from './altservicebox.component';

describe('AltserviceboxComponent', () => {
  let component: AltserviceboxComponent;
  let fixture: ComponentFixture<AltserviceboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltserviceboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltserviceboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
