/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconMainComponent } from './Icon-main.component';

describe('IconMainComponent', () => {
  let component: IconMainComponent;
  let fixture: ComponentFixture<IconMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
