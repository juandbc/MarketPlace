import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from '../model/cart';
import { environment } from 'src/environments/environment';
import { Util } from '../util/util';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  static urlApi = `${environment.apiHost}:${environment.apiPort}/${environment.apiBase}/carts`;

  products: any[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getCart(cartId: string): Observable<Cart> {
    const url = `${CartService.urlApi}/${cartId}`;
    return this.http.get<Cart>(url).pipe(
      catchError(Util.handleError<Cart>('getCart'))
    );
  }

  async addToCart(cartId: string, productId: string, quantity: number = 1): Promise<any> {
    // TODO: update the quantity if add a cart that is already added
    const response = { success: false, cartId: '' };

    const cart = {
      cartId,
      productId,
      qty: quantity
    };

    if (!cartId) {
      const cartStored = await this.http.post(CartService.urlApi, cart, this.httpOptions).toPromise<any>();
      if (cartStored) {
        response.success = true;
        response.cartId = cartStored._id;
      }
    } else {
      const url = `${CartService.urlApi}/${cartId}`;
      const cartStored = await this.http.put(url, cart, this.httpOptions).toPromise<any>();
      if (cartStored) {
        response.success = true;
        response.cartId = cartStored._id;
        console.log(response);
      }
    }
    return response;
  }

  // TODO:
  removeProduct(cartId: string, productId: string): boolean {
    let sucess = false;

    this.products = this.products.filter((p) => {
      return p.productId !== productId;
    });
    return sucess;
  }

  // TODO: update qty
  updateQuantity(cartId: string, productId: string, qty): boolean {
    let sucess = false;
    const cart = {
      cartId,
      productId,
      qty
    };

    this.http.put(CartService.urlApi, cart, this.httpOptions).subscribe(productUpdated => {
      if (productUpdated) {
        sucess = true;
      }
    });
    return sucess;
  }
}
