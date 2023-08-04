/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeadermenulistComponent } from './headermenulist.component';

describe('HeadermenulistComponent', () => {
  let component: HeadermenulistComponent;
  let fixture: ComponentFixture<HeadermenulistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadermenulistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadermenulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
