/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailstabComponent } from './detailstab.component';

describe('DetailstabComponent', () => {
  let component: DetailstabComponent;
  let fixture: ComponentFixture<DetailstabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailstabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
