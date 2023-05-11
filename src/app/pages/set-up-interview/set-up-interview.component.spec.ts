import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpInterviewComponent } from './set-up-interview.component';

describe('SetUpInterviewComponent', () => {
  let component: SetUpInterviewComponent;
  let fixture: ComponentFixture<SetUpInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetUpInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetUpInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
