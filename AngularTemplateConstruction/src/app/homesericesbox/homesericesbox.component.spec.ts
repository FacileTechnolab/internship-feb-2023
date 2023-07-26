/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomesericesboxComponent } from './homesericesbox.component';

describe('HomesericesboxComponent', () => {
  let component: HomesericesboxComponent;
  let fixture: ComponentFixture<HomesericesboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesericesboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesericesboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
