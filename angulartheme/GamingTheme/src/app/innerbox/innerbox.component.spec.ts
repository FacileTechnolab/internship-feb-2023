/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnerboxComponent } from './innerbox.component';

describe('InnerboxComponent', () => {
  let component: InnerboxComponent;
  let fixture: ComponentFixture<InnerboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
