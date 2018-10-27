import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchedulerService } from 'src/app/services/scheduler.service';
import { ReqNextSession } from 'src/app/requests/req-next-session';
import { UserData } from 'src/app/responses/user-data';
import { Observable, Subscription, interval } from 'rxjs';
import { map, flatMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ExercisesService } from 'src/app/services/exercises.service';
import { ReqExercises } from 'src/app/requests/req-exercises';
import { Session } from 'src/app/models/Session';
import { environment } from 'src/environments/environment';
import { SwPush } from '@angular/service-worker';


@Component({
  selector: 'mh-start-card',
  templateUrl: './start-card.component.html',
  styleUrls: ['./start-card.component.scss']
})
export class StartCardComponent implements OnInit {

  private exercises = '/exercises';
  private nextSession: UserData;
  public session: Session;
  readonly VAPID_PUBLIC_KEY = environment.publicKey;
  count = 0;

  constructor(
    private scheduler: SchedulerService,
    private exercise: ExercisesService,
    private router: Router,
    private swPush: SwPush
  ) { }

  ngOnInit() {
    const req = new ReqNextSession;
    req.token = 'Bar';
    req.timezone = new Date().getTimezoneOffset();

    this.scheduler.getNextSession(req).subscribe(
      (x) => this.nextSession = x,
      (e) => this.nextSession = new UserData()
    )
    .add(() => {
      const token = this.nextSession.token;

      this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
      })
      .then(sub => this.scheduler.addPushSubscriber(sub, token).subscribe())
      .catch(err => console.error("Could not subscribe to notifications", err));


    })
    .add(() => {
      this.getExercise();
    });
  }
  private getExercise() {
    this.exercise
      .getCurrentSession(new ReqExercises(this.nextSession.token))
      .subscribe(x => {
        this.session = x;
      });
  }
  redirectToExec() {
    this.router.navigate([this.exercises]);
  }
}
