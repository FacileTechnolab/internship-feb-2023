/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnertreadingboxComponent } from './innertreadingbox.component';

describe('InnertreadingboxComponent', () => {
  let component: InnertreadingboxComponent;
  let fixture: ComponentFixture<InnertreadingboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnertreadingboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnertreadingboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
