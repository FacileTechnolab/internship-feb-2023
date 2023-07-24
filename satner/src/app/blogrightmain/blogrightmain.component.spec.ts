/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogrightmainComponent } from './blogrightmain.component';

describe('BlogrightmainComponent', () => {
  let component: BlogrightmainComponent;
  let fixture: ComponentFixture<BlogrightmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogrightmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogrightmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
