import { Component, OnInit } from '@angular/core';
import { PeopleCounterService } from 'src/app/services/people-counter.service';
import { Subscription, timer, interval } from 'rxjs';

@Component({
  selector: 'mh-people-count',
  templateUrl: './people-count.component.html',
  styleUrls: ['./people-count.component.scss']
})
export class PeopleCountComponent implements OnInit {
  readonly period = 1000;
  peopleCount = 0;
  subs: Subscription;
  constructor(private counter: PeopleCounterService) { }
  ngOnInit() {
    interval(this.period).subscribe(x => this.counter.getCount().subscribe(y => this.peopleCount = y.count));
  }
}
