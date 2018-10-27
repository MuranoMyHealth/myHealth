import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { UserData } from '../responses/user-data';
import { ReqNextSession } from '../requests/req-next-session';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AppConfigService } from './app-config.service';


@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  private lsName = 'userData';
  private userData: UserData;
  constructor(private http: HttpClient, private appConfig: AppConfigService) { }
  fromStore(): UserData {
    if (!this.userData) {
      const data = localStorage.getItem(this.lsName);
      if (data && data !== 'undefined') {
        this.userData = JSON.parse(localStorage.getItem(this.lsName));
      }
    } else {
      return this.userData;
    }
    return this.userData;
  }
  getNextSession(req: ReqNextSession): Observable<UserData> {
    const ret = this.fromStore();
    if (ret) {
      return of(ret);
    } else {
      const params = new HttpParams();
      params.set('id', req.id);
      params.set('name', req.name);
      params.set('timeZone', req.timeZone.toString());
      return this.http.get<UserData>(this.appConfig.rootUrl + '/scheduler', { params: params })
        .pipe(tap(x => this.userData = x)
          , catchError(x => of(new UserData(req.id, req.name))))
        .pipe(tap(x => {
          this.userData = x;
          localStorage.setItem(this.lsName, JSON.stringify(this.userData));
        }));
    }
  }
  private storeUserData(data) {
    localStorage.setItem(this.lsName, data);
  }
  putUserData(userData: UserData): any {
    this.http.put(this.appConfig.rootUrl + '/user', userData).subscribe(x => {
      this.storeUserData(userData);
    });
  }
}
