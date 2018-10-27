import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SchedulerService } from './scheduler.service';

class RetCount {
  constructor(public count: number = 0) { }
}

@Injectable({
  providedIn: 'root'
})
export class PeopleCounterService {
  private lastCount = 0;
  constructor(private http: HttpClient, public scheduler: SchedulerService) { }
  public getCount(): Observable<RetCount> {
    const user = this.scheduler.fromStore();
    return this.http.post<RetCount>(environment.http_url + '/counter/check', { token: user.token })
      .pipe(tap(x => this.lastCount = x.count), catchError(x => of(new RetCount(this.lastCount))))
      .pipe(tap(x => this.lastCount = x.count));
  }
}
