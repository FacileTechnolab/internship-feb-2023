/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhychooseyummyComponent } from './whychooseyummy.component';

describe('WhychooseyummyComponent', () => {
  let component: WhychooseyummyComponent;
  let fixture: ComponentFixture<WhychooseyummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhychooseyummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhychooseyummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
