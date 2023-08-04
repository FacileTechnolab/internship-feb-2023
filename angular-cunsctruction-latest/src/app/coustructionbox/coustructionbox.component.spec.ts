/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoustructionboxComponent } from './coustructionbox.component';

describe('CoustructionboxComponent', () => {
  let component: CoustructionboxComponent;
  let fixture: ComponentFixture<CoustructionboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoustructionboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoustructionboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
