/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewsboxComponent } from './newsbox.component';

describe('NewsboxComponent', () => {
  let component: NewsboxComponent;
  let fixture: ComponentFixture<NewsboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
