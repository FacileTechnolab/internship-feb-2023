/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartindetailComponent } from './cartindetail.component';

describe('CartindetailComponent', () => {
  let component: CartindetailComponent;
  let fixture: ComponentFixture<CartindetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartindetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartindetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
