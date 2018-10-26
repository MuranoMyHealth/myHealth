import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ReqExercises } from '../requests/req-exercises';
import { Sessions } from '../responses/sessions';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  readonly lsName = 'execSessions';
  private rootUrl: string;
  private sessions: Sessions = new Sessions;
  constructor(private http: HttpClient) {
  }
  getExercises(req: ReqExercises): Sessions {
    const param = new HttpParams;
    param.set('userId', req.userId);
    this.http.get<Sessions>(this.rootUrl + '/exercises', { params: param })
      .subscribe(
        x => this.sessions = x, e => {
          if (!this.sessions) {
            this.sessions = new Sessions;
          }
        });
    if (!this.sessions) {
      const data = localStorage.getItem(this.lsName);
      if (data) {
        this.sessions = JSON.parse(localStorage.getItem(this.lsName));
      }
    } else {
      return this.sessions;
    }
  }
}
