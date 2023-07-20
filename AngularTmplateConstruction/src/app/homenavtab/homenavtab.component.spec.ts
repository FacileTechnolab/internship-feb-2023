/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomenavtabComponent } from './homenavtab.component';

describe('HomenavtabComponent', () => {
  let component: HomenavtabComponent;
  let fixture: ComponentFixture<HomenavtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomenavtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomenavtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
