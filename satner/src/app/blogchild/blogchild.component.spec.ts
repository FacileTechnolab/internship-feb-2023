/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogchildComponent } from './blogchild.component';

describe('BlogchildComponent', () => {
  let component: BlogchildComponent;
  let fixture: ComponentFixture<BlogchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
