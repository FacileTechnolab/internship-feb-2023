/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GallerychildComponent } from './gallerychild.component';

describe('GallerychildComponent', () => {
  let component: GallerychildComponent;
  let fixture: ComponentFixture<GallerychildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerychildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerychildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
