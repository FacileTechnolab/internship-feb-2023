/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CounterpartComponent } from './counterpart.component';

describe('CounterpartComponent', () => {
  let component: CounterpartComponent;
  let fixture: ComponentFixture<CounterpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
