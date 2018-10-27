import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { SchedulerService } from 'src/app/services/scheduler.service';
import { UserData } from 'src/app/responses/user-data';

class Hour {
  constructor(public value: number = 0, public viewValue: string = '0:00') { }
}

@Component({
  selector: 'mh-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  hoursFrom: Hour[] = [];
  hoursTo: Hour[] = [];
  from: number;
  to: number;
  slientMode = false;
  userData: UserData;
  constructor(private scheduler: SchedulerService) { }

  ngOnInit() {
    range(0, 24).subscribe(x => {
      this.hoursFrom.push(new Hour(x, x + ':00'));
      this.hoursTo.push(new Hour(x, x + ':00'));
    });
    this.userData = this.scheduler.fromStore();
    this.to = this.userData.to;
    this.from = this.userData.from;
    this.slientMode = this.userData.slientMode;
  }
  onChange() {
    if (this.from != null) {
      this.hoursTo = [];
      range(this.from, 24 - this.from).subscribe(x => {
        this.hoursTo.push(new Hour(x, x + ':00'));
      });
    }
    if (this.to != null) {
      this.hoursFrom = [];
      range(0, this.to === 0 ? 24 : this.to).subscribe(x => {
        this.hoursFrom.push(new Hour(x, x + ':00'));
      });
    }
    if (this.to != null && this.from != null) {
      this.userData.from = this.from;
      this.userData.to = this.to;
    }
    this.userData.slientMode = this.slientMode;
    this.scheduler.putUserData(this.userData);
  }
}


