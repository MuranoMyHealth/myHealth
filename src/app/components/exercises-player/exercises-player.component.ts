import {
  Component,
  Input,
  Output,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  QueryList,
  EventEmitter
} from '@angular/core';
import { MatHorizontalStepper } from '@angular/material';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { ProgressCountdownComponent } from '../progress-countdown/progress-countdown.component';


@Component({
  selector: 'mh-exercises-player',
  templateUrl: './exercises-player.component.html',
  styleUrls: ['./exercises-player.component.scss']
})
export class ExercisesPlayerComponent implements AfterViewInit {
  @ViewChild('stepper') stepper: MatHorizontalStepper;
  @ViewChildren(ProgressCountdownComponent) timers: QueryList<ProgressCountdownComponent>;
  @Input('exercises') steps:[] = [];
  @Output() endOfExercices: EventEmitter<void> = new EventEmitter();


  constructor() {
  }

  ngAfterViewInit() {
    this.runExercises();
  }

  nextStep() {
    if(this.stepper.selectedIndex === this.steps.length - 1) {
      this.sequenceEnded();
      return;
    }

    this.stepper.next();
  }

  stepChanged($event: StepperSelectionEvent) {
    const prev = $event.previouslySelectedIndex,
      cur = $event.selectedIndex,
      last = this.steps.length - 1;

    if(cur <= prev) return;

    this.getTimer($event.previouslySelectedIndex).reset();
    this.getTimer($event.selectedIndex).start();
  }

  runExercises() {
    this.getTimer(0).start();
  }

  sequenceEnded() {
    this.endOfExercices.emit();
  }

  reset() {
    this.stepper.reset();
  }

  getTimer(index: number = 0) {
    return this.timers.find((t, i) => i === index);
  }

}
