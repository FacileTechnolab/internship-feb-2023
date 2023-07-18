/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconeComponent } from './Icone.component';

describe('IconeComponent', () => {
  let component: IconeComponent;
  let fixture: ComponentFixture<IconeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
