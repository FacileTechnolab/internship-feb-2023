/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnerplayedboxComponent } from './innerplayedbox.component';

describe('InnerplayedboxComponent', () => {
  let component: InnerplayedboxComponent;
  let fixture: ComponentFixture<InnerplayedboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerplayedboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerplayedboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
