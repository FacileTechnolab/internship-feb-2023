/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabchildComponent } from './tabchild.component';

describe('TabchildComponent', () => {
  let component: TabchildComponent;
  let fixture: ComponentFixture<TabchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
