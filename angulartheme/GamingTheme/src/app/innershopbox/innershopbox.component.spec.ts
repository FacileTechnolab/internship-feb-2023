/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnershopboxComponent } from './innershopbox.component';

describe('InnershopboxComponent', () => {
  let component: InnershopboxComponent;
  let fixture: ComponentFixture<InnershopboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnershopboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnershopboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
