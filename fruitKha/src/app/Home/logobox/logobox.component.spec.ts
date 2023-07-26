/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogoboxComponent } from './logobox.component';

describe('LogoboxComponent', () => {
  let component: LogoboxComponent;
  let fixture: ComponentFixture<LogoboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
