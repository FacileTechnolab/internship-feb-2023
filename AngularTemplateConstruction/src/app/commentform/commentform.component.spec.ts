/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommentformComponent } from './commentform.component';

describe('CommentformComponent', () => {
  let component: CommentformComponent;
  let fixture: ComponentFixture<CommentformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
