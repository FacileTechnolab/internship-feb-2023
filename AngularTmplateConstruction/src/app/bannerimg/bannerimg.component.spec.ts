/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerimgComponent } from './bannerimg.component';

describe('BannerimgComponent', () => {
  let component: BannerimgComponent;
  let fixture: ComponentFixture<BannerimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
