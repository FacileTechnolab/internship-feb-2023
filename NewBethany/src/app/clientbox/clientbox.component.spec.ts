/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClientboxComponent } from './clientbox.component';

describe('ClientboxComponent', () => {
  let component: ClientboxComponent;
  let fixture: ComponentFixture<ClientboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
