/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartinboxrowComponent } from './cartinboxrow.component';

describe('CartinboxrowComponent', () => {
  let component: CartinboxrowComponent;
  let fixture: ComponentFixture<CartinboxrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartinboxrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartinboxrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
