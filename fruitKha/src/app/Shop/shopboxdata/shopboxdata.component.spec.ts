/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShopboxdataComponent } from './shopboxdata.component';

describe('ShopboxdataComponent', () => {
  let component: ShopboxdataComponent;
  let fixture: ComponentFixture<ShopboxdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopboxdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopboxdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
