import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesPlayerComponent } from './exercises-player.component';

describe('ExercisesPlayerComponent', () => {
  let component: ExercisesPlayerComponent;
  let fixture: ComponentFixture<ExercisesPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
