/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoodmainComponent } from './foodmain.component';

describe('FoodmainComponent', () => {
  let component: FoodmainComponent;
  let fixture: ComponentFixture<FoodmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
