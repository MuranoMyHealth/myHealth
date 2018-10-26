import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchedulerService } from 'src/app/services/scheduler.service';
import { ReqNextSession } from 'src/app/requests/req-next-session';
import { NextSession } from 'src/app/responses/next-session';
import { Observable, Subscription, interval } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'mh-start-card',
  templateUrl: './start-card.component.html',
  styleUrls: ['./start-card.component.scss']
})
export class StartCardComponent implements OnInit, OnDestroy {

  private exercises = '/exercises';
  private session: NextSession;
  private counter$: Observable<number>;
  private subscription: Subscription;
  private message: string;
  constructor(private scheduler: SchedulerService, private router: Router) { }

  ngOnInit() {
    const req = new ReqNextSession;
    req.id = 'Bar';
    req.name = 'Foo';
    req.timeZone = 180;
    this.session = this.scheduler.getNextSession(req);
    this.counter$ = interval(1000).pipe(map((x) => {
      return this.session.lostSeconds -= 1;
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
    const watch = [(x - x % (60 * 60)) / (60 * 60), (x % (60 * 60) - x % 60) / 60, x % (60)];
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
    this.subscription.unsubscribe();
  }
}
