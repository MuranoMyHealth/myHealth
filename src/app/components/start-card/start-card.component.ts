import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchedulerService } from 'src/app/services/scheduler.service';
import { ReqNextSession } from 'src/app/requests/req-next-session';
import { NextSession } from 'src/app/responses/next-session';
import { Observable, Subscription, interval } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Sessions } from 'src/app/responses/sessions';
import { ExercisesService } from 'src/app/services/exercises.service';
import { ReqExercises } from 'src/app/requests/req-exercises';

@Component({
  selector: 'mh-start-card',
  templateUrl: './start-card.component.html',
  styleUrls: ['./start-card.component.scss']
})
export class StartCardComponent implements OnInit, OnDestroy {

  private exercises = '/exercises';
  private nextSession: NextSession;
  private counter$: Observable<number>;
  private subscription: Subscription;
  private message: string;
  private sessions: Sessions;
  count = 0;
  constructor(private scheduler: SchedulerService, private exercise: ExercisesService, private router: Router) { }

  ngOnInit() {
    const req = new ReqNextSession;
    req.id = 'Bar';
    req.name = 'Foo';
    req.timeZone = 180;
    this.scheduler.getNextSession(req).subscribe((x) => {
      this.nextSession = x;
      this.sessions = this.exercise.getExercises(new ReqExercises(this.nextSession.userId));
      this.runCounter();
    }, (e) => {
      this.nextSession = new NextSession();
    }).add(() => {
      this.sessions = this.exercise.getExercises(new ReqExercises(this.nextSession.userId));
      this.runCounter();
    });
  }
  private runCounter() {
    this.count = 3600;
    const date = new Date();
    const hour = new Date().getHours();
    const ss = this.sessions.list.find(s => s.hour === hour);
    if (ss) {
      this.count -= (date.getMinutes() * 60 + date.getSeconds());
    }
    this.counter$ = interval(1000).pipe(map((x) => {
      if (ss) {
        return this.count -= 1;
      } else {
        this.count = 0;
        return this.count;
      }
    }));
    this.subscription = this.counter$.subscribe((x) => {
      this.message = this.dhms(x);
      if (x === 0) {
        this.subscription.unsubscribe();
        this.redirectToExec();
      }
    });
  }

  redirectToExec() {
    this.router.navigate([this.exercises]);
  }
  dhms(x: number): string {
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
        retMessage += element.toString();
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
