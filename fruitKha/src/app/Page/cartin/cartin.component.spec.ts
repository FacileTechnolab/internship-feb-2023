/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartinComponent } from './cartin.component';

describe('CartinComponent', () => {
  let component: CartinComponent;
  let fixture: ComponentFixture<CartinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
