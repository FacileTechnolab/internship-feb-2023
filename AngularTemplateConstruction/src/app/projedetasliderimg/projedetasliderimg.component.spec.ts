/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProjedetasliderimgComponent } from './projedetasliderimg.component';

describe('ProjedetasliderimgComponent', () => {
  let component: ProjedetasliderimgComponent;
  let fixture: ComponentFixture<ProjedetasliderimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjedetasliderimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjedetasliderimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
