import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSetUpInterviewComponent } from './edit-set-up-interview.component';

describe('EditSetUpInterviewComponent', () => {
  let component: EditSetUpInterviewComponent;
  let fixture: ComponentFixture<EditSetUpInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSetUpInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSetUpInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
