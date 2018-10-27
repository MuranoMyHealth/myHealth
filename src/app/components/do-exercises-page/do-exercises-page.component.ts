import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { ProgressCountdownComponent } from '../progress-countdown/progress-countdown.component';
import { Exercise } from 'src/app/models/Exercise';
import { ExercisesService } from 'src/app/services/exercises.service';
import { SchedulerService } from 'src/app/services/scheduler.service';
import { ReqExercises } from 'src/app/requests/req-exercises';

@Component({
  selector: 'mh-do-exercises-page',
  templateUrl: './do-exercises-page.component.html',
  styleUrls: ['./do-exercises-page.component.scss']
})
export class DoExercisesPageComponent implements AfterViewInit, OnInit {
  @ViewChild('countdown') countdown: ProgressCountdownComponent;
  exercises: Exercise[];
  UI_STATES = {
    COUNTDOWN: 0,
    EXERCISES: 1,
    END_EXERCISES: 2
  };
  uiState: number = this.UI_STATES.COUNTDOWN;

  constructor(private exercise: ExercisesService, private scheduler: SchedulerService) { }

  ngOnInit() {
    const user = this.scheduler.fromStore();
    this.exercise.getCurrentSession(new ReqExercises(user.userId)).subscribe(x => this.exercises =  x.list);
  }

  ngAfterViewInit() {
    if (this.uiState === this.UI_STATES.COUNTDOWN) {
      this.countdown.start();
    }
  }

  switchToExercises() {
    this.uiState = this.UI_STATES.EXERCISES;
  }

  switchToEndExercises() {
    this.uiState = this.UI_STATES.END_EXERCISES;
  }

}
