/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HometabcontentComponent } from './hometabcontent.component';

describe('HometabcontentComponent', () => {
  let component: HometabcontentComponent;
  let fixture: ComponentFixture<HometabcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometabcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometabcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
