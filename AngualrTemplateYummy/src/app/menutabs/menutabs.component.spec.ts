/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MenutabsComponent } from './menutabs.component';

describe('MenutabsComponent', () => {
  let component: MenutabsComponent;
  let fixture: ComponentFixture<MenutabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenutabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
