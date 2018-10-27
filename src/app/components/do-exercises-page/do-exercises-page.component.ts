import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ProgressCountdownComponent } from '../progress-countdown/progress-countdown.component';


class Exercise {
  constructor(
    public name: string = '',
    public imgUrl: string = 'https://trello-attachments.s3.amazonaws.com/5bd2f8df0b2e610533418238/5bd30500d0d84f18aa27d540/be383039bbe26a1b187f4004e3ff126c/1-tilt-neck-forward-back.gif',
    public instructions: string = 'Медленно наклоняйте шею вперед и назад',
    public duration: number = 1
  ) {}
}

const exercises: Exercise[] = [
  new Exercise(),
  new Exercise(),
  new Exercise()
];


@Component({
  selector: 'mh-do-exercises-page',
  templateUrl: './do-exercises-page.component.html',
  styleUrls: ['./do-exercises-page.component.scss']
})
export class DoExercisesPageComponent implements AfterViewInit {
  @ViewChild('countdown') countdown: ProgressCountdownComponent;
  exercises: Exercise[] = exercises;
  UI_STATES = {
    COUNTDOWN: 0,
    EXERCISES: 1,
    END_EXERCISES: 2
  };
  uiState: number = this.UI_STATES.COUNTDOWN;

  constructor() { }

  ngAfterViewInit() {
    if(this.uiState === this.UI_STATES.COUNTDOWN) {
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
