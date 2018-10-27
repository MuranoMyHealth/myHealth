import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mh-progress-countdown',
  templateUrl: './progress-countdown.component.html',
  styleUrls: ['./progress-countdown.component.scss']
})
export class ProgressCountdownComponent implements OnInit {
  @Input() duration: number;
  @Input() imageSrc: string | undefined;
  @Output() timeEnd: EventEmitter<void> = new EventEmitter();
  timeLeft: number;
  percents: number = 100;
  currentTimer: any;

  constructor() { }

  ngOnInit() {
    this.reset();
  }

  public start() {
    this.reset();

    if(this.duration > 0 && !this.currentTimer) {
      this.currentTimer = setInterval(this.tick.bind(this), 1000);
    }
  }

  public reset() {
    this.timeLeft = this.duration;
    this.percents = this.timeLeft / this.duration * 100;
  }

  tick() {
    if(--this.timeLeft < 0) {
      clearInterval(this.currentTimer);
      this.currentTimer = null;
      this.timeLeft = 0;
      this.timeEnd.emit();

      return;
    }

    this.percents = this.timeLeft / this.duration * 100;
  }

}
