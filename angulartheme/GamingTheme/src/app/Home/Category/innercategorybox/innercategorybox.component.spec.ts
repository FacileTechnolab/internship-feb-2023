/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnercategoryboxComponent } from './innercategorybox.component';

describe('InnercategoryboxComponent', () => {
  let component: InnercategoryboxComponent;
  let fixture: ComponentFixture<InnercategoryboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnercategoryboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnercategoryboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
