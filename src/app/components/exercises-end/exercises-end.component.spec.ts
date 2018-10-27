import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesEndComponent } from './exercises-end.component';

describe('ExercisesEndComponent', () => {
  let component: ExercisesEndComponent;
  let fixture: ComponentFixture<ExercisesEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
