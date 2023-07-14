/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookatableComponent } from './bookatable.component';

describe('BookatableComponent', () => {
  let component: BookatableComponent;
  let fixture: ComponentFixture<BookatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
