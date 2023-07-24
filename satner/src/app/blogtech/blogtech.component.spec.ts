/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogtechComponent } from './blogtech.component';

describe('BlogtechComponent', () => {
  let component: BlogtechComponent;
  let fixture: ComponentFixture<BlogtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
