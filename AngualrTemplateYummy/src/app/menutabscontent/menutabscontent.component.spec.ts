/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MenutabscontentComponent } from './menutabscontent.component';

describe('MenutabscontentComponent', () => {
  let component: MenutabscontentComponent;
  let fixture: ComponentFixture<MenutabscontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenutabscontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutabscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
