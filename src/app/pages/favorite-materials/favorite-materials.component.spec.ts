import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMaterialsComponent } from './favorite-materials.component';

describe('FavoriteMaterialsComponent', () => {
  let component: FavoriteMaterialsComponent;
  let fixture: ComponentFixture<FavoriteMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
