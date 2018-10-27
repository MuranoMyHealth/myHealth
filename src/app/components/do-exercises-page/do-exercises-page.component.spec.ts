import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoExercisesPageComponent } from './do-exercises-page.component';

describe('DoExercisesPageComponent', () => {
  let component: DoExercisesPageComponent;
  let fixture: ComponentFixture<DoExercisesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoExercisesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoExercisesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
