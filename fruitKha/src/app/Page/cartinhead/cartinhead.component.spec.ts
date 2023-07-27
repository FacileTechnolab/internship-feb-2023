/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartinheadComponent } from './cartinhead.component';

describe('CartinheadComponent', () => {
  let component: CartinheadComponent;
  let fixture: ComponentFixture<CartinheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartinheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartinheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
