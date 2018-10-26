import { Component, OnInit } from '@angular/core';
import { SchedulerService } from 'src/app/services/scheduler.service';
import { ReqNextSession } from 'src/app/requests/req-next-session';
import { NextSession } from 'src/app/responses/next-session';

@Component({
  selector: 'mh-start-card',
  templateUrl: './start-card.component.html',
  styleUrls: ['./start-card.component.scss']
})
export class StartCardComponent implements OnInit {

  private session: NextSession;
  constructor(private scheduler: SchedulerService) { }

  ngOnInit() {
    const req = new ReqNextSession;
       req.id = 'Bar';
       req.name = 'Foo';
       req.timeZone = 180;
   this.session = this.scheduler.getNextSession(req);
  }
}
