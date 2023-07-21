/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShopboxComponent } from './shopbox.component';

describe('ShopboxComponent', () => {
  let component: ShopboxComponent;
  let fixture: ComponentFixture<ShopboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
