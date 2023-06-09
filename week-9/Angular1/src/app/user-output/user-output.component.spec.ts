import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOutputComponent } from './user-output.component';

describe('UserOutputComponent', () => {
  let component: UserOutputComponent;
  let fixture: ComponentFixture<UserOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserOutputComponent]
    });
    fixture = TestBed.createComponent(UserOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
