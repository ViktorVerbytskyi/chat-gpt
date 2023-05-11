import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewSetUpComponent } from './interview-set-up.component';

describe('InterviewSetUpComponent', () => {
  let component: InterviewSetUpComponent;
  let fixture: ComponentFixture<InterviewSetUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewSetUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
