/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeblogpostComponent } from './homeblogpost.component';

describe('HomeblogpostComponent', () => {
  let component: HomeblogpostComponent;
  let fixture: ComponentFixture<HomeblogpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeblogpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeblogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
