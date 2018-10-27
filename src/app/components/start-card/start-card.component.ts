import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchedulerService } from 'src/app/services/scheduler.service';
import { ReqNextSession } from 'src/app/requests/req-next-session';
import { UserData } from 'src/app/responses/user-data';
import { Router } from '@angular/router';
import { ExercisesService } from 'src/app/services/exercises.service';
import { ReqExercises } from 'src/app/requests/req-exercises';
import { Session } from 'src/app/models/Session';


@Component({
  selector: 'mh-start-card',
  templateUrl: './start-card.component.html',
  styleUrls: ['./start-card.component.scss']
})
export class StartCardComponent implements OnInit {

  private exercises = '/exercises';
  private nextSession: UserData;
  public session: Session;
  count = 0;
  constructor(private scheduler: SchedulerService, private exercise: ExercisesService, private router: Router) { }

  ngOnInit() {
    const req = new ReqNextSession;
    req.timezone = new Date().getTimezoneOffset();
    this.scheduler.getNextSession(req).subscribe((x) => {
      this.nextSession = x;
    }, (e) => {
      this.nextSession = new UserData();
    }).add(() => {
      this.getExercise();
    });
  }
  private getExercise() {
    this.exercise.getCurrentSession(new ReqExercises(this.nextSession.token))
      .subscribe(x => {
        this.session = x;
      });
  }
  redirectToExec() {
    this.router.navigate([this.exercises]);
  }
}
