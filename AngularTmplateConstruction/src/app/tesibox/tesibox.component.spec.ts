/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TesiboxComponent } from './tesibox.component';

describe('TesiboxComponent', () => {
  let component: TesiboxComponent;
  let fixture: ComponentFixture<TesiboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesiboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesiboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
