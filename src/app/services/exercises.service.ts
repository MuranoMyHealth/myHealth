import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ReqExercises } from '../requests/req-exercises';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  private rootUrl: string;
  constructor(private http: HttpClient) {
  }
  getExercises(req: ReqExercises) {
    const param = new HttpParams;
    param.set('userId', req.userId);
    this.http.get(this.rootUrl + '/exercises', {params: param});
  }
}
