import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { NextSession } from '../responses/next-session';
import { ReqNextSession } from '../requests/req-next-session';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  constructor(private http: HttpClient) { }
  getNextSession(req: ReqNextSession): Observable<NextSession> {
    const params = new HttpParams();
    params.set('id', req.id);
    params.set('name', req.name);
    params.set('timeZone', req.timeZone.toString());
    return this.http.get<NextSession>('scheduler', { params: params });
  }
}
