/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartinboxComponent } from './cartinbox.component';

describe('CartinboxComponent', () => {
  let component: CartinboxComponent;
  let fixture: ComponentFixture<CartinboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartinboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartinboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
