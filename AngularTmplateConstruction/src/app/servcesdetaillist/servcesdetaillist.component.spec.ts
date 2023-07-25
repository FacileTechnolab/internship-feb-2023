/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServcesdetaillistComponent } from './servcesdetaillist.component';

describe('ServcesdetaillistComponent', () => {
  let component: ServcesdetaillistComponent;
  let fixture: ComponentFixture<ServcesdetaillistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServcesdetaillistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServcesdetaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
