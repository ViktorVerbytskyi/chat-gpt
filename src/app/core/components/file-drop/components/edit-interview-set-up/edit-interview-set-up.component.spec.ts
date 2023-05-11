import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInterviewSetUpComponent } from './edit-interview-set-up.component';

describe('EditInterviewSetUpComponent', () => {
  let component: EditInterviewSetUpComponent;
  let fixture: ComponentFixture<EditInterviewSetUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInterviewSetUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInterviewSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
