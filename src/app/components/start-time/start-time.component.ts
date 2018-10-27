import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'mh-start-time',
  templateUrl: './start-time.component.html',
  styleUrls: ['./start-time.component.scss']
})
export class StartTimeComponent implements OnInit, OnDestroy {
  @Input() count: number;
  @Output() ender = new EventEmitter();
  private counter$: Observable<number>;
  private subscription: Subscription;
  public message: string;
  constructor() { }

  ngOnInit() {
    this.runCounter();
  }
  private runCounter() {
    this.count = 3600;
    const date = new Date();
    this.count -= (date.getMinutes() * 60 + date.getSeconds());
    this.message = this.printTime(this.count);
    this.counter$ = interval(1000).pipe(map((x) => {
      return this.count -= 1;
    }));
    this.subscription = this.counter$.subscribe((x) => {
      this.message = this.printTime(x);
      if (x === 0) {
        this.subscription.unsubscribe();
        this.ender.emit();
      }
    });
  }
  printTime(x: number): string {
    const watch = [
      (x - x % (60 * 60)) / (60 * 60),
      (x % (60 * 60) - x % 60) / 60,
      x % (60)];
    let retMessage = '';
    watch.forEach((element, i) => {
      if (element !== 0) {
        if (i !== 0 && watch[i - 1] !== 0) {
          retMessage += ' : ';
        }
        retMessage += formatNumber(element, 'en-US', '2.0-0');
      }
      if (i === 2 && element === 0) {
        retMessage += ' : 00';
      }
    });
    return retMessage;
  }
  ngOnDestroy(): void {
    if (this.subscription && this.subscription.unsubscribe) {
      this.subscription.unsubscribe();
    }
  }
}
