import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutoutComponent } from './outout.component';

describe('OutoutComponent', () => {
  let component: OutoutComponent;
  let fixture: ComponentFixture<OutoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutoutComponent]
    });
    fixture = TestBed.createComponent(OutoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
