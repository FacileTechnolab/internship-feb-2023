/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CounterdataComponent } from './counterdata.component';

describe('CounterdataComponent', () => {
  let component: CounterdataComponent;
  let fixture: ComponentFixture<CounterdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
