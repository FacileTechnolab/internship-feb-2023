/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommentchildComponent } from './commentchild.component';

describe('CommentchildComponent', () => {
  let component: CommentchildComponent;
  let fixture: ComponentFixture<CommentchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
