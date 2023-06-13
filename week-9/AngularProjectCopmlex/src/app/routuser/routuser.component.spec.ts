import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutuserComponent } from './routuser.component';

describe('RoutuserComponent', () => {
  let component: RoutuserComponent;
  let fixture: ComponentFixture<RoutuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutuserComponent]
    });
    fixture = TestBed.createComponent(RoutuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
