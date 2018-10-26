import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ReqExercises } from '../requests/req-exercises';
import { Sessions } from '../responses/sessions';
import { andObservables } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  readonly lsName = 'execSessions';
  private rootUrl: string;
  private sessions: Sessions = new Sessions;
  constructor(private http: HttpClient) {
  }
  getExercises(req: ReqExercises): Observable<Sessions> {
    if (!this.sessions) {
      const data = localStorage.getItem(this.lsName);
      if (data) {
        this.sessions = JSON.parse(localStorage.getItem(this.lsName));
      }
      const param = new HttpParams;
      param.set('userId', req.userId);
      return this.http.get<Sessions>(this.rootUrl + '/exercises', { params: param }).pipe(map(x => this.sessions ));
    }
     return of(this.sessions);
  }
}
