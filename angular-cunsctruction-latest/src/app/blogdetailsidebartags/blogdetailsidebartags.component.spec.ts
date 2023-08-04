/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogdetailsidebartagsComponent } from './blogdetailsidebartags.component';

describe('BlogdetailsidebartagsComponent', () => {
  let component: BlogdetailsidebartagsComponent;
  let fixture: ComponentFixture<BlogdetailsidebartagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogdetailsidebartagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogdetailsidebartagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
