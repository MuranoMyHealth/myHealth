import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

class RetCount {
  constructor(public count: number = 0) {}
}

@Injectable({
  providedIn: 'root'
})
export class PeopleCounterService {
  private lastCount = 0;
  constructor(private http: HttpClient) {}
  public getCount(): Observable<RetCount> {
    return this.http.get<RetCount>(environment.http_url  + '/counter')
    .pipe(tap(x => this.lastCount = x.count ), catchError(x => of(new RetCount(this.lastCount))))
    .pipe(tap(x => this.lastCount = x.count));
  }  
}
