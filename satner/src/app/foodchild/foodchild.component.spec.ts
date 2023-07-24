/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoodchildComponent } from './foodchild.component';

describe('FoodchildComponent', () => {
  let component: FoodchildComponent;
  let fixture: ComponentFixture<FoodchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
