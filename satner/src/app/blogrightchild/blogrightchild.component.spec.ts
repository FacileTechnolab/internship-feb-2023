/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogrightchildComponent } from './blogrightchild.component';

describe('BlogrightchildComponent', () => {
  let component: BlogrightchildComponent;
  let fixture: ComponentFixture<BlogrightchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogrightchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogrightchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
