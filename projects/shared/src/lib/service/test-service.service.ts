import { Injectable } from '@angular/core';
import { Soccer } from '../interface/Soccer';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
// 导出：共用服务
export class TestServiceService {
  constructor(private http: HttpClient) {}

  private soccersUrl = 'api/soccers';

  // 获取球员
  getSoccers(): Observable<Soccer[]> {
    return this.http.get<Soccer[]>(this.soccersUrl).pipe(
      tap((_) => this.log('获取球员成功！')),
      catchError(this.handleError<Soccer[]>('getSoccers', []))
    );
  }

  private log(message: string) {
    console.log(`SoccerMessage: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
