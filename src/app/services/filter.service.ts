import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Util } from '../util/util';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  static urlApi = `${environment.apiHost}:${environment.apiPort}/${environment.apiBase}/categories`;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(FilterService.urlApi).pipe(
      catchError(Util.handleError<Category[]>('getCategory', []))
    );
  }
}
