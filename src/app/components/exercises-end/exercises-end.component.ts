import { Component, OnInit, Input } from '@angular/core';
import { ExercisesService } from 'src/app/services/exercises.service';
import { Session } from 'src/app/models/Session';
import { ReqExercises } from 'src/app/requests/req-exercises';
import { SchedulerService } from 'src/app/services/scheduler.service';

@Component({
  selector: 'mh-exercises-end',
  templateUrl: './exercises-end.component.html',
  styleUrls: ['./exercises-end.component.scss']
})
export class ExercisesEndComponent implements OnInit {
  @Input() steps: [] = [];
  session: Session;
  constructor(private exercise: ExercisesService, private scheduler: SchedulerService) { }

  ngOnInit() {
    this.exercise.getCurrentSession(new ReqExercises(this.scheduler.fromStore().userId))
      .subscribe(x => {
        this.session = x;
      });
  }

}
