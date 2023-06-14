import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelcComponent } from './modelc.component';

describe('ModelcComponent', () => {
  let component: ModelcComponent;
  let fixture: ComponentFixture<ModelcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelcComponent]
    });
    fixture = TestBed.createComponent(ModelcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
