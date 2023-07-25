/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurteamboxComponent } from './ourteambox.component';

describe('OurteamboxComponent', () => {
  let component: OurteamboxComponent;
  let fixture: ComponentFixture<OurteamboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurteamboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurteamboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
