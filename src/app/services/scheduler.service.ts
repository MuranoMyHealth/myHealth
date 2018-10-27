import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserData } from '../responses/user-data';
import { ReqNextSession } from '../requests/req-next-session';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  private lsName = 'userData';
  private userData: UserData;

  constructor(private http: HttpClient) { }

  fromStore(): UserData {
    if (!this.userData) {
      const data = localStorage.getItem(this.lsName);
      if (data && data !== 'undefined') {
        this.userData = JSON.parse(localStorage.getItem(this.lsName));
      }
    }

    return this.userData;
  }

  getNextSession(req: ReqNextSession): Observable<UserData> {
    const ret = this.fromStore();

    if (ret) {
      return of(ret);
    } else {
      const url = environment.http_url  + '/Notification/logon';
      return this.processUserDataRequest(
        this.http.post<UserData>(url, req),
        req.token
      );
    }
  }

  private processUserDataRequest(
    userData$: Observable<UserData>,
    token: string
  ): Observable<UserData> {
    return userData$
      .pipe(
        tap(res => this.userData = res),
        catchError(res => of(new UserData(token)))
      )
      .pipe(tap(res => {
        this.userData = res;
        localStorage.setItem(this.lsName, JSON.stringify(this.userData));
      }));
  }

  addPushSubscriber(sub: PushSubscription, token: string): Observable<UserData> {
    const url = `${environment.http_url}/Notification/subscribe/${token}`;
    return this.processUserDataRequest(
      this.http.post<UserData>(url, sub),
      token
    );
  }

  private storeUserData(data) {
    localStorage.setItem(this.lsName, JSON.stringify(data));
  }

  putUserData(userData: UserData): any {
    this.http.post(environment.http_url  + '/Notification/update', userData).subscribe(x => {
      this.storeUserData(userData);
    }, e => this.storeUserData(userData));
  }
}
