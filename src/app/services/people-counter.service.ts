import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

class RetCount {
  constructor(public count: number = 0) {}
}

@Injectable({
  providedIn: 'root'
})
export class PeopleCounterService {
  private lastCount = 0;
  constructor(private http: HttpClient, private appConfig: AppConfigService) {}
  public getCount(): Observable<RetCount> {
    return this.http.get<RetCount>(this.appConfig.rootUrl + '/counter')
    .pipe(tap(x => this.lastCount = x.count ), catchError(x => of(new RetCount(this.lastCount))))
    .pipe(tap(x => this.lastCount = x.count));
  }
}
