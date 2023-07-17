import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerinfoComponent } from './speakerinfo.component';

describe('SpeakerinfoComponent', () => {
  let component: SpeakerinfoComponent;
  let fixture: ComponentFixture<SpeakerinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakerinfoComponent]
    });
    fixture = TestBed.createComponent(SpeakerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
