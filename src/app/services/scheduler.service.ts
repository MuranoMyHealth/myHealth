import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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
      return this.http.post<UserData>(environment.http_url  + '/Notification/logon', req)
        .pipe(tap(x => this.userData = x)
          , catchError(x => of(new UserData(req.token))))
        .pipe(tap(x => {
          this.userData = x;
          this.storeUserData(this.userData);
        }));
    }
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
