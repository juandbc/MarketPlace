import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../model/product';
import { environment } from '../../environments/environment';
import { Util } from '../util/util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  static urlApi = `${environment.apiHost}:${environment.apiPort}/${environment.apiBase}/products`;

  constructor(private httpClient: HttpClient, ) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(ProductService.urlApi).pipe(
      catchError(Util.handleError<Product[]>('getProducts', []))
    );
  }

  getProduct(productId: string): Observable<Product> {
    const url = `${ProductService.urlApi}/${productId}`;
    return this.httpClient.get<Product>(url).pipe(
      catchError(Util.handleError<Product>('getProduct'))
    );
  }
}
